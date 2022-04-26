# ReentrantReadWriteLock

## **工作原理是什么？**

 读读共享， 读写互斥，写写互斥 

## **读写锁的结构**
```java
ReentrantReadWriteLock
  |— ReadLock
     | — lock()
     | — unlock()
  | — WriteLock
     |— lock()
     |— unlock() 
``` 
## **如何记录锁的状态？**

使用state记录锁的状态。 高16位表示读锁数量，低16位数表示写锁数量（写锁会包含重入数量）。

*读锁重入的数量*是通过ThreadLocal记录，使用HoldCounter 。

```java
 static final class HoldCounter {
    int count = 0;
    // Use id, not reference, to avoid garbage retention  
    // 通过UnSafe 获取线程的内存地址
    final long tid = getThreadId(Thread.currentThread());
}
```

## **写锁加锁的过程**
```java
getWriteLock() 
     → lock() 
          → sync.acquire(1)
             → tryAcquire(arg)
             → addWaiter(node)
             → acquireQueued(node)

/**
  尝试获取锁的过程
    不满足条件 ： 
       1. 已经获取了读锁
       2. 获取了写锁，持有锁的不是当前线程
       3. 锁的数量超过最大数量 ，最大数量为 （1 << 16 ）-1 
     抢锁需要考虑的条件：
      1. 是否为公平锁  ，公平锁需要排队   
      2. 并发抢锁需要 CAS (state ,  c , c + arg  )   
*/
protected final boolean tryAcquire(int acquires) {
    Thread current = Thread.currentThread();
    int c = getState();  // 锁的数量
    int w = exclusiveCount(c); // 写锁的数量
    if (c != 0) {  // 不为空说明有线程持有锁
        // 
        // w ==0 没有获取写锁，说明是读锁，不满足
        // 如果不是当前线程， 不满足
        if (w == 0 || current != getExclusiveOwnerThread())
            return false;
        //  超过了最大的锁数量，不满足，直接抛出异常
        if (w + exclusiveCount(acquires) > MAX_COUNT)
            throw new Error("Maximum lock count exceeded");
        // 到了这里，说明是当前线程持有独占锁，可以进行重入
        setState(c + acquires);
        return true;
    }
    if (writerShouldBlock() ||
        !compareAndSetState(c, c + acquires))
        return false;
    setExclusiveOwnerThread(current);
    return true;
}
```

## **写锁的释放过程**

## **读锁加锁过程**

## **读锁的释放过程**
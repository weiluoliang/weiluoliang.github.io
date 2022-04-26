call yarn build

call cd docs\.vuepress\dist

call echo blog.luoliang.top> CNAME

call git init
call git add -A
call git commit -m 'deploy'

call git push -f git@github.com:weiluoliang/weiluoliang.github.io.git master:gh-page

call cd ..\..\..
call yarn build

call cd docs/.vuepress/dist


call echo 'blog.luoliang.top' > CNAME

call git init
call git add -A
call git commit -m "${msg}"
call git push -f git@github.com:weiluoliang/weiluoliang.github.io.git master:gh-page # 推送到github gh-pages分支

cd -
rm -rf docs/.vuepress/dist

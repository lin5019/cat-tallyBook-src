#!/usr/bin/env sh

# 在发生错误时中止脚本
set -e

# 构建
yarn build

# 进入到dist目录
cd dist

# 部署到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:lin5019/cat-tallyBook-website.git master:gh-pages

# 回到之前目录
cd -
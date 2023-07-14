npm config set registry https://registry.npmjs.org
npm login # 登录，如果有 OTP, 邮箱会接收到验证码，输入即可
# 登录成功后，短时间内会保存状态，可以直接
npm publish ./build # 可能会提示已存在，换个版本号再发
# 还原镜像地址
npm config set registry https://registry.npmmirror.com
module.exports = {
  apps: [
    {
      name: 'da_prod',
      script: 'yarn',
      args: 'run start'
    }
  ],
  deploy: {
    prod: {
      user: 'root',
      key: '~/.ssh/id_rsa',
      host: ['139.9.133.227'],
      ssh_options: 'StrictHostKeyChecking=no',
      // 拉取部署分支
      ref: 'origin/DEPLOY-PROD',
      // 仓库地址
      repo: 'git@github.com:wuweikd/efox-lang-hook.git',
      // 部署 remote 路径
      path: '/www/efoxlang',
      'post-deploy': '.  /root/.nvm/nvm.sh && yarn install && pm2 reload ecosystem.config.js'
    },
  }
}

module.exports = {
  apps: [
    {
      name: 'rp-schliesstechnik',
      script: 'npm',
      args: 'run start',
      cwd: '/root/rp-schliesstechnik',
      env: { NODE_ENV: 'production', PORT: 3000 },
      max_memory_restart: '500M',
      watch: false,
    },
    {
      name: 'rp-schliesstechnik-staging',
      script: 'npm',
      args: 'run start',
      cwd: '/root/rp-schliesstechnik-staging',
      env: { NODE_ENV: 'production', PORT: 3004 },
      max_memory_restart: '500M',
      watch: false,
    },
  ],
};

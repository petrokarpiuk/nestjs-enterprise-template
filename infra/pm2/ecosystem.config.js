module.exports = {
  apps: [
    {
      name: 'solid-api',
      script: 'dist/solid-saas-api/main.js',
      exec_mode: 'cluster',
      instances: 3,
      max_memory_restart: '1G',
      merge_logs: true,
      log_type: 'json',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      time: true,
    },
  ],
};

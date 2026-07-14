const { spawn } = require('child_process');

// 后台独立运行 wake_up.js，不会被容器回收
const wakeTask = spawn('node', ['wake_up.js'], {
  detached: true,
  stdio: 'ignore'
});
wakeTask.unref();

// 主线程启动网关服务，作为容器前台常驻进程
require('./server.js');

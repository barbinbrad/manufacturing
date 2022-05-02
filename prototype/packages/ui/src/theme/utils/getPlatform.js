export default function getPlatform() {
  if (typeof window !== 'undefined') {
    const userAgent = window.navigator.userAgent;

    return {
      isWin: userAgent.indexOf('Windows') >= 0,
      isMac: userAgent.indexOf('Macintosh') >= 0,
      isLinux: userAgent.indexOf('Linux') >= 0,
    };
  } else {
    const platform = process.platform;
    const isWin = platform === 'win32';
    const isMac = platform === 'darwin';

    return {
      isWin,
      isMac,
      isLinux: !isWin && !isMac,
    };
  }
}
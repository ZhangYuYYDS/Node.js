import crypto from 'crypto';

export function md5password(password) {
    const md5 = crypto.createHash('md5');
    const passwordMd5 = md5.update(password).digest('hex');
    // 返回加密后的密码
    return passwordMd5;
}

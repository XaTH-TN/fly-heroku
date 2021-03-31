export function setAuthority(authority) {
    const proAuthority = typeof authority === 'string' ? [authority] : authority;
    localStorage.setItem('id_token', JSON.stringify(proAuthority)); // auto reload
}
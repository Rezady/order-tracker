export const generateRandom = (length) => {
    let result = '';
    const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

export const getActive = (key, pathname) => {
    return (
      key == 0 || 
      (key == 1 && (pathname == '/payment' || pathname == "/finish")) ||
      (key == 2 && pathname == "/finish") ? 
      true : false
    ) 
}

export const goBack = (pathname, navigate) => {
    if(pathname === "/payment") {
      navigate('/delivery')
    }
    return ;
}

export const getFileFromUrl = async (url: string, defaultType = 'image/jpeg') => {
    const response = await fetch(url);
    const data = await response.blob();
    const name = url.substring(url.lastIndexOf('/') + 1);
    return new File([data], name, {
        type: data.type || defaultType,
    });
}
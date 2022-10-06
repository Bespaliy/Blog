export const getFormatYYMMDD = (str: string) => {
	return str.length > 1 ? str : `0${str}`
}

const date = new Date();

const day = getFormatYYMMDD(date.getDay().toString());
const month = getFormatYYMMDD(date.getMonth().toString());
const year = getFormatYYMMDD(date.getFullYear().toString());

export const yymmdd = `${year}.${month}.${day}`;
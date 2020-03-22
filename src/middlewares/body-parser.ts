import * as bodyParse from 'body-parser';

const bodyParseJson = bodyParse.json();
const bodyParseUrlencoded = bodyParse.urlencoded({ extended: true });

export { bodyParseJson, bodyParseUrlencoded };

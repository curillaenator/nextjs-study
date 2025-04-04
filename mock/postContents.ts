const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vel at a.';
const CONTENTS = [...new Array(30)].map(() => lorem.repeat(Math.ceil(Math.random() * 4)));

export { CONTENTS };

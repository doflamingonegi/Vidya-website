const express = require('express');
const router = express.Router();

const topics = [
    { id: 1, title: 'What are the two properties of carbon which lead to the huge number of carbon compounds we see around us ?' },
    { id: 2, title: 'Why is the conversion of ethanol to ethanoic acid an oxidation reaction ?' },
    { id: 3, title: 'How can the resources be classified on the basis of origin ?' },
    { id: 4, title: 'It is important to use the available land for various purposes with careful planning”. Give reason.' },
];

router.get('/', (req, res) => {
    res.render('forum', { topics });
});


module.exports = router;

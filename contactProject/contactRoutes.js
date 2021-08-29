const router = require('express').Router();

const {
    getAllContacts,
    createContact,
    getContactById,
    updateContacts,
    deleteContact

} = require('./contactController')

router.get('/', getAllContacts)
router.post('/', createContact)
router.get('/:id', getContactById)
router.put('/:id',updateContacts)
router.delete('/:id',deleteContact)

module.exports = router;
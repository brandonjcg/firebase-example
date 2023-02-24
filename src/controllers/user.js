module.exports = (req, res) => {
    try {
        const { name, email } = req.body;

        if (!name || !email) throw new Error('Name and email are required');

        const { db } = req;

        const ref = db.ref('users');
        const user = ref.push({ name, email });

        return res.status(201).json({
            error: false,
            message: 'User successfully saved',
            data: { user },
            info: {},
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: `${err.name}: ${err.message}`,
            data: {},
            info: {},
        });
    }
};

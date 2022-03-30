const mongooose = require('mongoose');

const UserSchema = new mongooose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    last: {
        type: String,
        required: true,
        trim: true,
    },
    username: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    country: {
        type: String,
        required: true,
        trim: true,
    },
    city: {
        type: String,
        required: true,
        trim: true,
    },
    role: {
        type: String,
        required: true,
        trim: true,
    },
    avatar: String
}, {
    timestamps: true,
    versionKey: false,
});

UserSchema.pre('save', async function (next) {
    try {
        next();
    } catch (error) {
        next(error);
    }
});

UserSchema.virtual('profile').get(function () {
    const { name, last, username, email, role } = this;
    return {
        fullName: `${name} ${last}`,
        username,
        email,
        role
    };
});

module.exports = mongooose.model('User', UserSchema);

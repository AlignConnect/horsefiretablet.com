import Joi from "joi"

export const CustomerDataValue = [
    {
        icon: null,
        label: "नाम लिखिए",
        inputValue: {
            type: "text",
            name: "name",
        }
    },
    {
        label: "फोन नंबर लिखिए",
        icon: "+91",
        inputValue: {
            type: "tel",
            name: "phone",
            maxLength: 10,
            pattern: "\\d{10}",
            inputMode: "numeric",
            onInput: (e) => {
                e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10);
            }
        }
    }

]

export class CustomerDataValidator {

    constructor() { }

    static JoiValidator = (formdata) => {
        const schema = Joi.object({
            name: Joi.string().trim().required(),
            phone: Joi.string().regex(/^[6-9]\d{9}$/).required().messages({ 'string.regex': 'Please Fill Correct Value' }),
            address: Joi.string().optional().allow('')
        })

        const { error, value } = schema.validate(formdata, {
            allowUnknown: false,
            abortEarly: true,
            stripUnknown: false
        })

        if (error) {
            throw error.message
        }
        return value
    }
}
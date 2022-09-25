export default {
    name: 'contact.form',
    type: 'document',
    title: 'Contact Form',
    readOnly: true,
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'number',
            type: 'number',
            title: 'Number'
        },
        {
            name: 'created_at',
            type: 'datetime',
            title: 'Created at'
        },
        {
            name: 'data',
            type: 'object',
            title: 'Data',
            fields: [
                {
                    name: 'name',
                    type: 'string',
                    title: 'Name'
                },
                {
                    name: 'phone',
                    type: 'number',
                    title: 'Phone'
                },
                {
                    name: 'email',
                    type: 'email',
                    title: 'Email'
                },
                {
                    name: 'message',
                    type: 'text',
                    title: 'Message'
                }
            ]
        }
    ]
}
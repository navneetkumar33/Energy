import { rest } from 'msw'
export const handlers = [
    rest.get('http://localhost/api/v1/festivals', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json([{
            name: "LOL-palooza",
            bands: [{ name: 'Winter Primates', recordLabel: '' },
            { name: 'Frank Jupiter', recordLabel: 'Pacific Records' },
            { name: 'Jill Black', recordLabel: 'Fourth Woman Records' },
            { name: 'Werewolf Weekday', recordLabel: 'XS Recordings' },
            ]
        }

        ]))
    })
]
import { Request, Response } from 'express'
import User from '../../schemas/User'

export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params
    const newData = req.body

    console.log(id, newData)

    try {
        const userUpdated = await User.findOneAndUpdate({ _id: id }, newData, {
            new: true,
        })

        if (userUpdated) {
            return res
                .status(200)
                .json({ ok: true, msg: 'User Updated!', userUpdated })
        }

        return res.status(404).json({
            msg: "The user that you're trying to edit doesn't exist",
        })
    } catch (error) {
        console.log(error)
        return res.status(404).json({
            ok: false,
            msg: 'An error occured, contact an administrator',
        })
    }
}

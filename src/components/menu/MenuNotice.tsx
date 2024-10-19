import { Divider } from "../common/Divider"

export const MenuNotice = () => {
    return (
        <div className='max-w-[1200px] mx-4 md:mx-0 font-julius'>
            <div className='mb-4 mt-2'>
                <Divider bgColor="bg-rouge " />
            </div>

            <p>* Enthält Sulfite</p>
            <p>* Allergene Stoffe</p>
        </div>
    )
}
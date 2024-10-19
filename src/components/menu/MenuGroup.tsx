import { Divider } from '../common/Divider';

export type MenuGroupProps = {
    title: string;
    children: React.ReactNode;
};

export function MenuGroup({ title, children }: MenuGroupProps) {
    return <div className='max-w-[1200px]'>
        <h1 className="text-2xl font-bold font-vollkorn text-center my-1">{title}</h1>
        <div className='mb-4 mt-2 mx-4 md:mx-0'>
            <Divider bgColor="bg-rouge " />
        </div>

        {children}
    </div>
}
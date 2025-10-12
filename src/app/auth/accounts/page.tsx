import AccountSelector from "./AccountSelector";

export default function Accounts() {
    return (

        <div className="flex flex-col gap-4 m-auto mt-32 p-8 items-center justify-center border border-gray-100 shadow-md rounded-md bg-[#FBFBFB] lg:w-1/3 md:w-2/3 sm:w-full">
            <header className="flex flex-col gap-2 text-left w-full mx-4">
                <h1 className="text-xl font-bold">Accounts</h1>
                <h3>Here are the businesses you own and the jobs you work at. Select an account to continue.</h3>
            </header>
            <AccountSelector />
        </div>
    );
}
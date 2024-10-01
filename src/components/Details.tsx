import { Input } from "./input"
function Details() {
    return (
        <div className="flex flex-col">
            <h4 className="font-medium mb-5">Offices</h4>
            <div className="text-gray-600 mb-5">
                <h6>United States</h6>
                <h6>500 5th Avenue Suite 400, NY 10110</h6>
            </div>
            <div className="text-gray-600 mb-5">
                <h6>United Kingdom</h6>
                <h6>High St, Bromiey BR1 1DN</h6>
            </div>
            <div className="text-gray-600 mb-16">
                <h6>France</h6>
                <h6>80 avenue des Terroirs de France, Paris</h6>
            </div>
            <h4 className="font-medium mb-7">For Quick Inquiries</h4>
            <span className="flex items-center text-gray-600 mb-5"><img src="../../assets/img/england.png" alt="England" className="size-4"/>+44 7777777777</span>
            <span className="flex items-center text-gray-600 mb-16"><img src="../../assets/img/united.png" alt="United States" className="size-4"/>+1 3333333330</span>
            <h4 className="font-medium mb-5">Would you like to join our newsietter?</h4>
            <div className="flex space-x-4">
                <Input type="email" placeholder="Email"/>
                <button><i className="material-icons bg-green-700 py-1 px-3">&#xf00c;</i></button>
            </div>
        </div>
    )
}
export default Details
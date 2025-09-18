const Radio = ({ id, label, caption, value, onChange }) => {
    return (
        <>
            {/* <div class="flex items-center">
                <input id="email" name="notification-method" type="radio" checked class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                <label for="email" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Email</label>
            </div> */}
            <input
            type="radio"
            id={id}
            value={value}
            onChange={onChange}
            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
        </>
    )
}

export default Radio;
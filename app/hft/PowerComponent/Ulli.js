
const Ulli = () => {

    let x = [
        'छोटा लिंग और स्तंभन दोष',
        'शीघ्रपतन, टाइमिंग की समस्या ',
        'जोश, स्टेमिना,और उर्जा की कमी',
        'लो लीबीडो, कामेच्छा की कमी',
        'या फिर अन्य धातु रोग की समस्या'
    ]


    return (
        <div className="w-full md:w-[768px] mx-auto max-h-full min-h-[30px]">
            <ul>
                {
                    x.map((e, key) => {
                        return <li key={key} className='li_style'>{e}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Ulli;
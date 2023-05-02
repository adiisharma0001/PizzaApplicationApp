import React from 'react'

export default function card(props) {
    // let options = props.options;
    // let priceOptions = Object.keys(options);
    const handleAddToCart = () => {

    }
    return (
        <div>
            <div>
                <div className="card mt-3 mx-3" style={{ "width": "18rem", "maxHeight": "420px" }}  >
                    <img src={props.img} className="card-img-top" alt="..." style={{ height: "200px", objectFit: "fill" }} />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is Some Important Text.</p>
                        <div className='container w-100'>
                            <select className='m-2 h-100  bg-success rounded'>
                                {Array.from(Array(10), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    )
                                })}
                            </select>
                            <select className='m-2 h-100  bg-success rounded'>
                                <option value='small'>Small</option>
                                <option value='Medium'>Medium</option>
                                <option value='Large'>Large</option>
                            </select>
                            <div className='d-inline h-50 '>
                                Total Price
                            </div>
                        </div>
                        <hr>
                        </hr>
                        <button className={'btn btn-seccess justify-center ms-2  bg-success rounded'} onClick={handleAddToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}



import React from 'react';

const index = (props) => {
    console.log(props)
    return (<>
        <div className="card" style={{ "maxWidth": "48rem" }}>
            <div className="card-body">
                <h5 className="card-title">{props.rest.title}
                </h5>
                <img src={props.rest.image_url || props.rest.imageurl} onError={(e) => { e.target.onerror = null; e.target.src = 'https://image.freepik.com/free-vector/404-error-web-template-with-cute-dog_23-2147763341.jpg' }} style={{ "width": "44rem" }} className="card-img-bottom" alt={props.rest.imageurl} />

                <h6 className="card-title">{props.rest.subTitle || props.rest.sub_title}
                </h6>
                <p className="card-text" >
                    {props.rest.story}
                </p>
                <p className="card-text" style={{ "color": "green" }}>By-
                            {props.rest.userName || props.rest.username}<br /> <i>Contact/Email-{props.rest.contact || "None"}</i><br />💗&nbsp;{props.rest.likes}<br />👁‍🗨&nbsp;{props.rest.views}
                </p>

            </div>
        </div>
        {/* <div classNameName="card" style={{ "width": "48rem", "marginLeft": "2rem", "marginBottom": "3%" }}>

            <img style={{ "height": '200px' }} classNameName="card-img-top" src={props.rest.image_url||props.rest.imageurl||'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1155&h=1528'} onError={(e) => { e.target.src = props.rest.imageurl }} alt="cardimagecap" />
            <div classNameName="card-body">
                <h5 classNameName="card-title">{props.rest.title}</h5>
                <h6 classNameName="card-title">{props.rest.subTitle}</h6>
                <div classNameName="card-text">
                    <div><span style={{ fontSize: '14px', fontWeight: '600', color: 'green' }}> Story: </span><span style={{ fontSize: '11px', fontWeight: '500' }}>{props.rest.story||"Amazon"}</span>
                    </div>
                   
                    <div>
                        <span style={{ fontSize: '14px', fontWeight: '600', color: 'green' }}> Views: </span><span style={{ fontSize: '11px', fontWeight: '500' }}>{props.rest.views}</span>
                    </div>
                    <div>
                        <span style={{ fontSize: '14px', fontWeight: '600', color: 'green' }}> Likes: </span><span style={{ fontSize: '11px', fontWeight: '500' }}>{props.rest.likes}</span>
                    </div>
                    <div>
                        <span style={{ fontSize: '14px', fontWeight: '600', color: 'green' }}> User: </span><span style={{ fontSize: '11px', fontWeight: '500' }}>{props.rest.userName||props.rest.username}</span>
                    </div><div>
                        <span style={{ fontSize: '14px', fontWeight: '600', color: 'green' }}> Contact: </span><span style={{ fontSize: '11px', fontWeight: '500' }}>{props.rest.contact||"None"}</span>
                    </div>
                </div>
            </div>
            <div classNameName="card-footer" style={{ background: "linear-gradient(90deg,snow,lightgrey)" }}>
            <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Get Coupon</button>
            <div classNameName="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog">
    
      <div className="modal-content">
        <div className="modal-header">
        <h4 className="modal-title">Copy coupon code and paste it in the url given to avail the prize.  </h4>
          <button type="button" classNameName="close" data-dismiss="modal">&times;</button>
          
        </div>
        <div className="modal-body">

        <div>
        <img style={{ "height": '500px' }} classNameName="card-img-top" src={props.rest.product_image} onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1504113888839-1c8eb50233d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} alt="cardimagecap" />
            <span style={{ fontSize: '14px', fontWeight: '600', color: 'green' }}>Coupon_code: </span><span style={{ fontSize: '11px', fontWeight: '500' }}>{props.rest.coupon_code}</span>
            <div>
                        <span style={{ fontSize: '14px', fontWeight: '600', color: 'green' }}> Expiry_date: </span><span style={{ fontSize: '11px', fontWeight: '500' }}>{props.rest.expiry_date||"None"}</span>
                    </div>
                    <div>
                        <span style={{ fontSize: '14px', fontWeight: '600', color: 'green' }}> Url: </span><a style={{ fontSize: '11px', fontWeight: '500' }} href={props.rest.url}>{props.rest.url||"None"}</a>
                    </div>
        </div>
        </div>
        <div classNameName="modal-footer">
          <button type="button" classNameName="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div> */}


        {/* </div> */}

        {/* </div > */}
    </>
    )
}


export default index;

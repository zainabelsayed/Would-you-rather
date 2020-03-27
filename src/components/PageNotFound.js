import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'
import page_not_found from '../images/undraw_page_not_found_su7k.png'

class PageNotFound extends Component {
    render(){
        return(
            <div>
                <Image src={page_not_found} fluid />
            </div>
        )
    }
}

export default PageNotFound
import React, { useEffect } from 'react';
import { getProducts } from "../../store/Actions/products";
import { connect } from "react-redux";

function Landing({loading, getProducts}) {

    useEffect(() => {
        getProducts();
    }, [getProducts])
    return (
        <div>
            <h2>Landing Page works</h2>
        </div>
    )
}

const mapStateToProps = (state) => ({
    loading: state.products.loading,
});
export default connect(mapStateToProps, { getProducts })(Landing);

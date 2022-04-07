import React from "react";
import AddGoods from "./AddGoods";
import {addGoods} from "../redux/addGoods-reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        id: state.addGoods.goods.id,
        name: state.addGoods.goods.name,
        totalRem: state.addGoods.goods.totalRem
    }
}

debugger
let asda = connect(mapStateToProps, {addGoods})(AddGoods)
export default  asda
import { Text, View } from "@tarojs/components";

import { Cell, Image, Popup, Swiper, Tag, TextEllipsis } from "@taroify/core";

import { useState } from "react";
import ActionBar from "@taroify/commerce/action-bar";

import { CartOutlined, HomeOutlined, ShareOutlined } from "@taroify/icons";

import "./index.less";

function SwiperWithCustomIndicator() {
  const [value, setValue] = useState(0);
  const images = [
    "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17a.png",
    "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17a1.png",
    "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17b.png",
    "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17b1.png",
  ];

  const listItems = images.map((item, index) => (
    <Swiper.Item key={index}>
      <Image className='image' src={item} />
    </Swiper.Item>
  ));

  return (
    <Swiper autoplay={4000} onChange={setValue}>
      {listItems}
      <Swiper.Indicator className='custom-indicator'>
        {value + 1}/4
      </Swiper.Indicator>
    </Swiper>
  );
}

function ValueSelect() {
  return <View>111</View>;
}

function Popupstase() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <View className='popup'>
      <View className='poptext' onClick={() => setShowPopup(true)}>
        <Cell
          title='已选  请选择'
          isLink
          bordered={false}
          style={{ lineHeight: "10px" }}
        />
      </View>
      <Popup
        open={showPopup}
        rounded
        placement='bottom'
        style={{ height: "60%" }}
        onClose={() => setShowPopup(false)}
        className='popup-popup'
      >
        <View className='popup-content'>
          <ValueSelect></ValueSelect>
        </View>
        <Popup.Backdrop
          onClick={() => setShowPopup(false)}
          open={showPopup}
          style={{ background: "rgba(0,0,0,0.5)" }}
        ></Popup.Backdrop>
        <Popup.Close placement='top-right'></Popup.Close>
      </Popup>
    </View>
  );
}

function BasicActionBar() {
  return (
    <ActionBar className='.actionbar'>
      <ActionBar.IconButton className='actionitem'>
        <HomeOutlined className='action_icon' size={30} style={{ top: 10 }} />
        <Text className='action_text'>首页</Text>
      </ActionBar.IconButton>
      <ActionBar.IconButton className='actionitem'>
        <CartOutlined className='action_icon' size={30} style={{ top: 10 }} />
        <Text className='action_text'>购物车</Text>
      </ActionBar.IconButton>

      <ActionBar.ButtonGroup flex={250} className='action_right'>
        <ActionBar.Button
          style={{ background: "#e11414" }}
          className='right_item'
          shape='round'
        >
          加入购物车
        </ActionBar.Button>
        <ActionBar.Button
          style={{ background: "#f5d207" }}
          className='right_item'
          shape='round'
        >
          立即购买
        </ActionBar.Button>
      </ActionBar.ButtonGroup>
    </ActionBar>
  );
}

export default function Index() {
  const tagstyle = {
    backgroundColor: "#ffe1e1",
    color: "#ad0000",
  };
  return (
    <View className='page-body'>
      <View className='img_swiper'>
        <SwiperWithCustomIndicator></SwiperWithCustomIndicator>
      </View>
      <View className='price_box'>
        <View className='price'>
          <View className='price_left'>
            <Text className='now_p'>￥298</Text>{" "}
            <Text className='pre_p'>￥400</Text>
          </View>
          <View className='price_right'>
            <Text className='yishou'>已售1024</Text>
          </View>
        </View>
        <View className='redeem'>
          <View className='tag_left'>
            <Tag style={tagstyle}>满减</Tag>
            <Tag style={tagstyle}>满减</Tag>
            <Tag style={tagstyle}>满减</Tag>
            <Tag style={tagstyle}>满减</Tag>
          </View>
          <View className='tag_right'>
            <Cell isLink>领券</Cell>
          </View>
        </View>
        <View className='good_title'>
          <View className='title'>
            <TextEllipsis content='慢慢来，不要急，生活给你出了难题' />
          </View>
          <View className='share'>
            <View className='btn-icon'>
              <ShareOutlined />
            </View>
            <View className='btn-text'> 分享</View>
          </View>
        </View>
      </View>
      <View className='size_select'>
        <Popupstase></Popupstase>
      </View>
      <View className='comments'></View>
      <View className='goods_details'></View>
      <View className='bottom'>
        <BasicActionBar></BasicActionBar>
      </View>
    </View>
  );
}

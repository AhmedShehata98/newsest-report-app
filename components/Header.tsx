import React from "react";
import { AutoComplete, Input, Layout, Menu } from "antd";
import Link from "next/link";
import Logo from "./Logo";
const Header = () => {
  const { Header } = Layout;
  return (
    <Header className="flex w-full justify-between items-center !bg-zinc-100 ">
      <Logo />
      <AutoComplete allowClear bordered className="w-1/4">
        <Input.Search placeholder="search in news title" />
      </AutoComplete>
      <Menu
        mode="horizontal"
        className="flex items-center justify-end bg-zinc-100 uppercase font-semibold w-1/4 h-full"
        defaultActiveFirst
        activeKey="home"
      >
        <Menu.Item key={"home"}>
          <Link href={"/"}>home</Link>
        </Menu.Item>
        <Menu.Item key={"immediate"}>
          <Link href={"/immediate"}>immediate</Link>
        </Menu.Item>
        <Menu.Item key={"forum"}>
          <Link href={"/forum"}>forum</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Header;

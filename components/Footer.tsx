import { Button, Form, Input } from "antd";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col">
      <div
        className="relative w-full h-72 flex items-center justify-center bg-cover bg-center after:absolute after:inset-0 after:bg-zinc-900 after:bg-opacity-60"
        style={{
          backgroundImage: `url("/footer-cover.webp")`,
        }}
      >
        <Form layout="inline" className="relative z-10 w-10/12 lg:w-2/5">
          <h3 className="text-xl lg:text-2xl text-white mx-auto uppercase mb-4">
            subscribe to get lastest News !
          </h3>
          <Form.Item className="w-full">
            <Input.Group className="!flex justify-center items-center" compact>
              <Form.Item noStyle>
                <Input
                  type="email"
                  size="large"
                  placeholder="email"
                  name="email-subscribe"
                  id="emailSubscribe"
                />
              </Form.Item>
              <Form.Item noStyle>
                <Button
                  type="primary"
                  className="flex items-center justify-center leading-3 uppercase !text-xs bg-red-500 !rounded-tl-none !rounded-bl-none hover:!bg-red-400"
                  size="large"
                >
                  get free news
                </Button>
              </Form.Item>
            </Input.Group>
          </Form.Item>
        </Form>
      </div>
    </footer>
  );
};

export default Footer;

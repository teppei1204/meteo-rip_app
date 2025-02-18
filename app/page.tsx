// page.tsx
"use client"; // クライアントサイドで実行することを明示
import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    // main.js の内容をここに記述します。
    let imagesItems = [...document.querySelectorAll(".img-wrap")];
    let titles = [...document.querySelectorAll("h2")];
    let titleMessage = document.querySelector(".title");

    // IntersectionObserverの設定
    let options = {
      rootMargin: "0px",
      threshold: 0.5,
    };

    let setItemActive = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    };

    let observer = new IntersectionObserver(setItemActive, options);

    // 各アイテムの監視設定
    imagesItems.forEach((item, index) => {
      item.children[0].style.backgroundImage = `url(/images/${index + 1}.jpg)`;
      index % 2 === 0 ? (item.style.left = "55%") : (item.style.left = "5%");
      observer.observe(item);
    });

    titles.forEach((title, index) => {
      index % 2 === 0 ? (title.style.left = "45%") : (title.style.left = "35%");
      observer.observe(title);
    });

    // observer.observe(titleMessage);
  }, []); // 空の依存配列で、コンポーネントの初回レンダリング時に実行されるようにする

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* タイトル */}
      <div className="title">
        <h1></h1>
      </div>

      {/* 概要ページ */}
      <section>
        <h2>概要(Overview)</h2>
        <div className="img-wrap">
          <div className="img"></div>
        </div>
      </section>

      {/* 商品ページ */}
      <section>
        <h2>商品(Products)</h2>
        <div className="img-wrap">
          <div className="img"></div>
        </div>
      </section>

      {/* お客さんの声ページ */}
      <section>
        <h2>お客さんの声(Customer feedback)</h2>
        <div className="img-wrap">
          <div className="img"></div>
        </div>
      </section>

      {/* お問い合わせページ */}
      <section>
        <h2>お問い合わせ</h2>
        <div className="img-wrap">
          <div className="img"></div>
        </div>
      </section>

      {/* ToBeContinueページ */}
      <section>
        <h2>ToBeContinue</h2>
        <div className="img-wrap">
          <div className="img"></div>
        </div>
      </section>
    </div>
  );
}

import React, { useRef, useState } from "react";
import styles from "../DataGrid.module.scss";
import { FaRegCopy } from "react-icons/fa";
type Props = {
  position: { x: number; y: number };
  value: string;
  visible: {
    contextMenuVisible: boolean;
    setContextMenuVisible: (v: boolean) => void;
  };
};

const ContextMenu = ({ position: { x, y }, value, visible }: Props) => {
  const contextMenuRef = useRef<HTMLDivElement>(null);

  const { contextMenuVisible, setContextMenuVisible } = visible;
  const mouseLeaveHandle = () => {
    setContextMenuVisible(false);
  };
  return (
    <>
      {contextMenuVisible && (
        <div
          // onSelect={(event) => event.preventDefault()}
          onContextMenu={(event) => event.preventDefault()}
          onMouseLeave={mouseLeaveHandle}
          ref={contextMenuRef}
          style={{
            borderRadius: "2px",
            position: "absolute",
            top: y,
            left: x,
            backgroundColor: "#eee",
            border: "1px solid black",
            padding: "4px",
            width: "150px",
            zIndex: 9999,
            userSelect: "none",
            boxShadow: "0px 0px 5px rgba(0,0,0,0.5)",
          }}
        >
          {/* {value} */}
          <ul className={styles.contextMenu_list}>
            <li>
              <FaRegCopy size={18} className="icon" />
              <a href="#">Копировать</a>
            </li>
            <li>
              <a href="#">Вставить</a>
            </li>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#"></a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default ContextMenu;

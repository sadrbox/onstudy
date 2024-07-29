import React, { useRef, useState } from "react";
import styles from "../DataGrid.module.scss";
import { FaRegCopy } from "react-icons/fa";
import { PiCopy } from "react-icons/pi";
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
          className={styles.contextMenu}
          style={{
            top: y,
            left: x,
          }}
        >
          {/* {value} */}
          <ul className={styles.contextMenu_list}>
            <li>
              <PiCopy size={16} />
              <a href="#">Копировать</a>
            </li>
            <li>
              <a href="#">Вставить</a>
            </li>
            <li>
              <a href="#">Вырезать</a>
            </li>
            <li>
              <a href="#">Удалить</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default ContextMenu;

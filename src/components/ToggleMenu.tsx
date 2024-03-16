"use client";

import type { ComponentProps } from "react";
import Image from "next/image";

type Props = ComponentProps<"img">;

const ToggleMenu = ({ className }: Props) => (
  <Image
    src="/assets/images/menu.svg"
    width={20}
    height={20}
    alt="Menu"
    className={className}
    priority={true}
    onClick={() =>
      document
        .querySelector<HTMLMenuElement>(".menu")
        ?.classList.toggle("active")
    }
  />
);

export default ToggleMenu;

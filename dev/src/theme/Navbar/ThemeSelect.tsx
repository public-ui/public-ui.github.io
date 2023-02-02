import { SelectOption } from "@public-ui/components";
import { InputTypeOnDefault } from "@public-ui/components/dist/types/types/input/types";
import { KolSelect } from "@public-ui/react";
import React, { FunctionComponent, useEffect, useState } from "react";
import {
  getDarkMode,
  setDarkMode,
  setTheme,
  getTheme,
} from "../../shares/store";
import { Store, Theme } from "../../shares/theme";
import PackageJson from "../../../package.json";

const OPTIONS: SelectOption<Theme>[] = [
  {
    label: "DEFAULT-Styleguide",
    value: "default",
  },
  {
    disabled: true,
    label: "Bayrische Staatskanzlei (PoC)",
    value: "by",
  },
  {
    disabled: true,
    label: "BPA-Styleguide (WIP)",
    value: "bpa",
  },
  {
    disabled: true,
    label: "BMF-Styleguide (not public)",
    value: "bpa",
  },
  {
    disabled: true,
    label: "DESY-Styleguide (not public)",
    value: "desy",
  },
  {
    disabled: true,
    label: "Hansestadt Hamburg (PoC)",
    value: "hh",
  },
  {
    disabled: true,
    label: "ITZBund-Styleguide (WIP)",
    value: "itzbund",
  },
  {
    disabled: true,
    label: "MAPZoll-Styleguide (not public)",
    value: "mapz",
  },
  {
    label: "Freistaat Thüringen (PoC)",
    value: "th",
  },
  {
    disabled: true,
    label: "ZOLL-Styleguide v2 (not public)",
    value: "zoll",
  },
];

type ActivateButton = {
  _disabled: boolean;
  _on?: InputTypeOnDefault;
};

export const ThemeSelect: FunctionComponent = () => {
  const [activate, setActivate] = useState<ActivateButton>({
    _disabled: true,
  });

  const store = () => {
    console.log({
      darkMode: getDarkMode(),
      theme: getTheme(),
    });
    localStorage.setItem(
      `public-ui.website-${PackageJson.version}`,
      JSON.stringify({
        darkMode: getDarkMode(),
        theme: getTheme(),
      })
    );
  };

  useEffect(() => {
    const RESTORE = localStorage.getItem(
      `public-ui.website-${PackageJson.version}`
    );
    try {
      const store = JSON.parse(RESTORE) as Store;
      if (typeof store === "object" && store !== null) {
        setDarkMode(store.darkMode);
        setTheme(store.theme);
      }
    } catch (e) {
      /* empty */
    }

    const div = document.querySelector("div[data-theme]");
    if (div instanceof HTMLElement) {
      div.setAttribute("class", getTheme());
      div.dataset.theme = getTheme();
    }
    console.log({
      darkMode: getDarkMode(),
      theme: getTheme(),
    });

    const timeout = setTimeout(() => {
      clearTimeout(timeout);
      setActivate({
        _disabled: false,
        _on: {
          onChange: (_event, value) => {
            if (Array.isArray(value)) {
              setTheme(value[0] as Theme);
              store();
              location.reload();
            }
          },
        },
      });
    }, 1000);
  }, []);

  return (
    <KolSelect
      className="col-span-2 sm:col-auto"
      {...activate}
      _hideLabel
      _id="theme-toggle"
      _list={OPTIONS}
      _value={[getTheme()]}
    >
      Theme auswählen
    </KolSelect>
  );
};

export default ThemeSelect;

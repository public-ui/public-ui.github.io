export declare type KoliBriIconProp = AnyIconFontClass | KoliBriAllIcon;
export declare type Alignment = 'left' | 'right';
export declare type AnyIconFontClass = string;
export declare type KoliBriCustomIcon = {
  icon: AnyIconFontClass;
  style?: Record<string, string>;
};
export declare type KoliBriHorizontalIcon = {
  right: AnyIconFontClass | KoliBriCustomIcon;
  left?: AnyIconFontClass | KoliBriCustomIcon;
} | {
  right?: AnyIconFontClass | KoliBriCustomIcon;
  left: AnyIconFontClass | KoliBriCustomIcon;
};
export declare type KoliBriAllIcon = {
  top: AnyIconFontClass | KoliBriCustomIcon;
  right?: AnyIconFontClass | KoliBriCustomIcon;
  bottom?: AnyIconFontClass | KoliBriCustomIcon;
  left?: AnyIconFontClass | KoliBriCustomIcon;
} | {
  top?: AnyIconFontClass | KoliBriCustomIcon;
  right: AnyIconFontClass | KoliBriCustomIcon;
  bottom?: AnyIconFontClass | KoliBriCustomIcon;
  left?: AnyIconFontClass | KoliBriCustomIcon;
} | {
  top?: AnyIconFontClass | KoliBriCustomIcon;
  right?: AnyIconFontClass | KoliBriCustomIcon;
  bottom: AnyIconFontClass | KoliBriCustomIcon;
  left?: AnyIconFontClass | KoliBriCustomIcon;
} | {
  top?: AnyIconFontClass | KoliBriCustomIcon;
  right?: AnyIconFontClass | KoliBriCustomIcon;
  bottom?: AnyIconFontClass | KoliBriCustomIcon;
  left: AnyIconFontClass | KoliBriCustomIcon;
};
export declare type KoliBriIconState = {
  top?: AnyIconFontClass | KoliBriCustomIcon;
  right?: AnyIconFontClass | KoliBriCustomIcon;
  bottom?: AnyIconFontClass | KoliBriCustomIcon;
  left?: AnyIconFontClass | KoliBriCustomIcon;
};

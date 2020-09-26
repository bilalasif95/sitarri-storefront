export interface IProps {
  onChange: (value: any, name?: any) => void;
  value: any;
  options: any;
  name?: any;
  type?: string;
  sortBy?: string;
  menuIsOpen?: boolean;
}

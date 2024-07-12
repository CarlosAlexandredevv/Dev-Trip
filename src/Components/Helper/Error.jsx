export function Error({ message }) {
  return message ? <div className="text-red-500">{message}</div> : null;
}

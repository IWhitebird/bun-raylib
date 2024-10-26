import { ptr, dlopen, FFIType } from "bun:ffi";

//Path to your raylib shared library
const path = `../raylib/lib/libraylib.so`;

export const { symbols:  raylib ,} = dlopen(path , {
    InitWindow: {
      args: [FFIType.i32, FFIType.i32, FFIType.cstring],
      returns: FFIType.void,
    },
    WindowShouldClose: {
      args: [],
      returns: FFIType.bool,
    },
  }
);

const titile = new Uint8Array( Buffer.from("Hello, Raylib!"));
raylib.InitWindow(800, 600, ptr(titile));

while (!raylib.WindowShouldClose()) {
}
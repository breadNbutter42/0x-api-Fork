// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: big_number_js.proto
/* eslint-disable */

import type { ByteSource } from "protoscript";
import { BinaryReader, BinaryWriter } from "protoscript";

//========================================//
//                 Types                  //
//========================================//

/**
 **
 *  Property representation of a bignumber.js instance. See:
 *  https://mikemcl.github.io/bignumber.js/#instance-properties
 */
export interface BigNumberJs {
  c: bigint[];
  e?: number | null | undefined;
  /**
   * `true` -> 1, `false` -> -1
   */
  s?: boolean | null | undefined;
}

//========================================//
//        Protobuf Encode / Decode        //
//========================================//

export const BigNumberJs = {
  /**
   * Serializes BigNumberJs to protobuf.
   */
  encode: function (msg: Partial<BigNumberJs>): Uint8Array {
    return BigNumberJs._writeMessage(msg, new BinaryWriter()).getResultBuffer();
  },

  /**
   * Deserializes BigNumberJs from protobuf.
   */
  decode: function (bytes: ByteSource): BigNumberJs {
    return BigNumberJs._readMessage(
      BigNumberJs.initialize(),
      new BinaryReader(bytes)
    );
  },

  /**
   * Initializes BigNumberJs with all fields set to their default value.
   */
  initialize: function (): BigNumberJs {
    return {
      c: [],
      e: undefined,
      s: undefined,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: Partial<BigNumberJs>,
    writer: BinaryWriter
  ): BinaryWriter {
    if (msg.c?.length) {
      writer.writePackedInt64String(
        1,
        msg.c.map((x) => x.toString() as any)
      );
    }
    if (msg.e != undefined) {
      writer.writeSint32(2, msg.e);
    }
    if (msg.s != undefined) {
      writer.writeBool(3, msg.s);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (msg: BigNumberJs, reader: BinaryReader): BigNumberJs {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          if (reader.isDelimited()) {
            msg.c.push(...reader.readPackedInt64String().map(BigInt));
          } else {
            msg.c.push(BigInt(reader.readInt64String()));
          }
          break;
        }
        case 2: {
          msg.e = reader.readSint32();
          break;
        }
        case 3: {
          msg.s = reader.readBool();
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },
};

//========================================//
//          JSON Encode / Decode          //
//========================================//

export const BigNumberJsJSON = {
  /**
   * Serializes BigNumberJs to JSON.
   */
  encode: function (msg: Partial<BigNumberJs>): string {
    return JSON.stringify(BigNumberJsJSON._writeMessage(msg));
  },

  /**
   * Deserializes BigNumberJs from JSON.
   */
  decode: function (json: string): BigNumberJs {
    return BigNumberJsJSON._readMessage(
      BigNumberJsJSON.initialize(),
      JSON.parse(json)
    );
  },

  /**
   * Initializes BigNumberJs with all fields set to their default value.
   */
  initialize: function (): BigNumberJs {
    return {
      c: [],
      e: undefined,
      s: undefined,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (msg: Partial<BigNumberJs>): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.c?.length) {
      json["c"] = msg.c.map((x) => x.toString());
    }
    if (msg.e != undefined) {
      json["e"] = msg.e;
    }
    if (msg.s != undefined) {
      json["s"] = msg.s;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: BigNumberJs, json: any): BigNumberJs {
    const _c = json["c"];
    if (_c) {
      msg.c = _c.map(BigInt);
    }
    const _e = json["e"];
    if (_e) {
      msg.e = _e;
    }
    const _s = json["s"];
    if (_s) {
      msg.s = _s;
    }
    return msg;
  },
};

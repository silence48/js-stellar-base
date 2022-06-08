describe('SignerKey', function() {
  describe('encode/decode roundtrip', function() {
    const TEST_CASES = [
      {
        strkey: 'GA7QYNF7SOWQ3GLR2BGMZEHXAVIRZA4KVWLTJJFC7MGXUA74P7UJVSGZ',
        type: StellarBase.xdr.SignerKeyType.signerKeyTypeEd25519()
      },
      {
        strkey: 'TBU2RRGLXH3E5CQHTD3ODLDF2BWDCYUSSBLLZ5GNW7JXHDIYKXZWHXL7',
        type: StellarBase.xdr.SignerKeyType.signerKeyTypePreAuthTx()
      },
      {
        strkey: 'XBU2RRGLXH3E5CQHTD3ODLDF2BWDCYUSSBLLZ5GNW7JXHDIYKXZWGTOG',
        type: StellarBase.xdr.SignerKeyType.signerKeyTypeHashX()
      },
      {
        strkey:
          'PA7QYNF7SOWQ3GLR2BGMZEHXAVIRZA4KVWLTJJFC7MGXUA74P7UJUAAAAAQACAQDAQCQMBYIBEFAWDANBYHRAEISCMKBKFQXDAMRUGY4DUPB6IBZGM',
        type: StellarBase.xdr.SignerKeyType.signerKeyTypeEd25519SignedPayload()
      }
    ];

    TEST_CASES.forEach((testCase) => {
      it(`works for ${testCase.strkey.substring(0, 5)}...`, function() {
        const skey = StellarBase.SignerKey.decodeAddress(testCase.strkey);
        expect(skey.switch()).to.eql(testCase.type);

        const rawXdr = skey.toXDR('raw');
        const rawSk = StellarBase.xdr.SignerKey.fromXDR(rawXdr, 'raw');
        expect(rawSk).to.eql(skey);

        const address = StellarBase.SignerKey.encodeSignerKey(skey);
        expect(address).to.equal(testCase.strkey);
      });
    });
  });

  describe('signed payloads', function() {
    const SIGNER = 'GA7QYNF7SOWQ3GLR2BGMZEHXAVIRZA4KVWLTJJFC7MGXUA74P7UJVSGZ';
    const TEST_CASES = [
      // generated via the Go SDK
      {
        payload: Buffer.from('hello world', 'ascii'),
        strkey:
          'PA7QYNF7SOWQ3GLR2BGMZEHXAVIRZA4KVWLTJJFC7MGXUA74P7UJUAAAAAFWQZLMNRXSA53POJWGIADD24'
      },
      {
        payload: Buffer.from('', 'ascii'),
        strkey:
          'PA7QYNF7SOWQ3GLR2BGMZEHXAVIRZA4KVWLTJJFC7MGXUA74P7UJUAAAAAAKH4Y'
      },
      {
        payload: Buffer.from('1', 'ascii'),
        strkey:
          'PA7QYNF7SOWQ3GLR2BGMZEHXAVIRZA4KVWLTJJFC7MGXUA74P7UJUAAAAAATCAAAABIRA'
      },
      {
        payload: Buffer.from(
          'Here is a payload; its length is the maximum length of 64 bytes!',
          'ascii'
        ),
        strkey:
          'PA7QYNF7SOWQ3GLR2BGMZEHXAVIRZA4KVWLTJJFC7MGXUA74P7UJUAAAABAEQZLSMUQGS4ZAMEQHAYLZNRXWCZB3EBUXI4ZANRSW4Z3UNAQGS4ZAORUGKIDNMF4GS3LVNUQGYZLOM52GQIDPMYQDMNBAMJ4XIZLTEGSE4'
      }
    ];

    TEST_CASES.forEach((testCase) => {
      it(`works for ${testCase.strkey.substring(0, 5)}...`, function() {
        const sp = StellarBase.SignerKey.composeSignedPayload(
          SIGNER,
          testCase.payload
        );
        expect(sp).to.eql(testCase.strkey);

        const obj = StellarBase.SignerKey.decomposeSignedPayload(sp);
        expect(obj.signer).to.eql(SIGNER);
        expect(obj.payload.toString('hex')).to.eql(
          testCase.payload.toString('hex')
        );
      });
    });
  });

  describe('error cases', function() {
    [
      // these are valid strkeys, just not valid signers
      'SAB5556L5AN5KSR5WF7UOEFDCIODEWEO7H2UR4S5R62DFTQOGLKOVZDY',
      'MA7QYNF7SOWQ3GLR2BGMZEHXAVIRZA4KVWLTJJFC7MGXUA74P7UJVAAAAAAAAAAAAAJLK',
      // this is (literal) nonsense
      'NONSENSE'
    ].forEach((strkey) => {
      it(`fails on ${strkey.substring(0, 5)}...`, function() {
        expect(() => {
          StellarBase.SignerKey.decodeAddress(strkey);
        }).to.throw(/invalid signer key type/i);
      });
    });

    it('fails on invalid strkey', function() {
      expect(() =>
        // address taken from strkey_test.js#invalidStrKeys
        StellarBase.SignerKey.decodeAddress(
          'G47QYNF7SOWQ3GLR2BGMZEHXAVIRZA4KVWLTJJFC7MGXUA74P7UJVP2I'
        )
      ).to.throw(/invalid version byte/i);
    });
  });
});

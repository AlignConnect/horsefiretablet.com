/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {

        NEXT_APP_API_URL: 'https://api.brahmikalp.com/api/',

        // NEXT_APP_API_URL_SHOPIFY: "https://shopifyapi.plantifygarden.in",

        NEXT_APP_API_URL_SHOPIFY: "https://webapi.brahmikalp.com",


        SHOPIFY_GENERATE_TOKEN:
            "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaG9waWZ5YWNjZXNzdG9rZW4iOiJzaHBhdF8wMDg2MGQ3ZDg5YjlhM2NhOTExMmI3MGQ3MGJmNWZmZiIsInNob3BpZnl1cmwiOiJodHRwczovLzZlMTJmNy04ZS5teXNob3BpZnkuY29tIiwiaWF0IjoxNzI1NTI5Mjc3fQ.F098pecX4aU-4jqgrszxR5gU7ac2eCAbxVoBX_xZCB_6qW5G0tHGhOgJPLzYu8J757DJtFEsA6iP90XJ4zMHnSAAJ8Uww2PUqBs3TgruHLHQNORkw78aEjAHN9EEDPg5A9tQlJXcyv7N7ws0u1A5rgNyeJZ8jmi_3t4raPVQi_GjkXW1UVu9WFpc131OWMr0N75fU4yFo5OH6N_vWHzO657tDFzo18lLiLa82_4ZUBaIEWk6JO4KhniIbSaNeTM1XJoYHz6CEyAV9gxnTHKqw2SBHsyTWwgK-gTqDQ895pVWaJQ55E0zJfAI5yeI3WPG0gOijHi1exUFEpSHwA_Sow",


        //main env

        NEXT_APP_URL: 'https://horsefiretablet.com',
        NEXT_APP_API_KEY: 'pMbGTbgDmAuAuOMAMUqABcUwDFrAwvkuULTpOxFFBjesxXeDcu',

        // nqKgPexfxlprdSRXPGSwHKGLVHtubKimiBMqBTMpVxpzGWCZqM

        NEXT_APP_URL_HFTSRHF: 'https://horsefiretablet.com/hftsrhf',
        NEXT_APP_API_KEY_HFTSRHF: "LbQiaGrprYFVMUUXpkzBrvXmjLOzgzghHLlaEUFuEqkVndznGV",

        // HFO Blog
        NEXT_APP_URL_HFTSRH: 'https://horsefiretablet.com/hftsrh',
        NEXT_APP_API_KEY_HFTSRH: 'nqKgPexfxlprdSRXPGSwHKGLVHtubKimiBMqBTMpVxpzGWCZqM',



        // HFO Blog
        NEXT_APP_URL_HFO: 'https://horsefiretablet.com/hfo',
        NEXT_APP_API_KEY_HFO: 'heZVuNkPJbdHWyEXbvUhabbcxsMwLqDxkIrqUgorhYJoEYQXoe',

        // HFU Blog
        NEXT_APP_URL_HFU: 'https://horsefiretablet.com/hfu',
        NEXT_APP_API_KEY_HFU: 'QXXGUjggeWEajqnvEMjlSieeNckeXfjOodmtXlDVNWkbjTtsHb',

        // HFV Blog
        NEXT_APP_URL_HFV: 'https://horsefiretablet.com/hfv',
        NEXT_APP_API_KEY_HFV: 'QqesHvYkoqIfWNLKTfEDqSlhXokKydNgFfhBoCdPklZOGUrEEv',

        // HXT Blog
        NEXT_APP_URL_HXT: 'https://horsefiretablet.com/hxt',
        NEXT_APP_API_KEY_HXT: 'zQxtMHayMyyEbiqmLbWbPncxCdQdxeiXPSzwNEeeMkGHWxlpYC',

        // HFT Blog
        NEXT_APP_URL_HFT: 'https://horsefiretablet.com/hft',
        NEXT_APP_API_KEY_HFT: 'FRaCFgPWjXocODxKoSajMmhoMMLzHgwmuAFppQKWloAWYneOIi',

        // HFH Blog
        NEXT_APP_URL_HFH: 'https://horsefiretablet.com/hfh',
        NEXT_APP_API_KEY_HFH: 'rztnhXiBEFSuUrCsgXFJqyWFNpDotBGkoIrrsnisPRKFycAwOo',

        // HFB Blog
        NEXT_APP_URL_HFB: 'https://horsefiretablet.com/hfb',
        NEXT_APP_API_KEY_HFB: 'lEIEjFsczmbuTIoesqeAhWngHxHoBzUtsWpVFPfdVqiNzXgaei',


        // HFH Blog
        NEXT_APP_URL_HFLIP: 'https://horsefiretablet.com/hflip',
        NEXT_APP_API_KEY_HFLIP: 'VkoKTtDOijWFIxNDtwaAiruolIgIHLdmzsyXVJTsILgFAYvFDf',

        NEXT_APP_URL_HFD: 'https://horsefiretablet.com/hfd',
        NEXT_APP_API_KEY_HFD: 'uUaSNnaLAhgqdwsHDPlHGOqMnAGoQmwGJuxDMjyssDKBzrIKQo',

        NEXT_APP_URL_HFQ: 'https://horsefiretablet.com/hfq',
        NEXT_APP_API_KEY_HFQ: 'DniBaDpvHAGpNwBwTXSnpZiOWAwydbVBNqrbaWVjqZtECTfKzQ',

        NEXT_APP_URL_HFKRT: 'https://horsefiretablet.com/hfkrt',
        NEXT_APP_API_KEY_HFKRT: 'huFkdwiAokYgNyHkYGpqKGXMsQLDEsxDGMUgWkiBcqgxfdFNib',

        NEXT_APP_URL_HFKT: 'https://horsefiretablet.com/hfkt',
        NEXT_APP_API_KEY_HFKT: 'KGQAnZVfJgbQfujsoIljzgqvNmILqnbisFIHSnmFQLtTrLSeLW',

        NEXT_APP_URL_HFKART: 'https://horsefiretablet.com/hfkart',
        NEXT_APP_API_KEY_HFKART: 'ymAXiWZXEOUDjVnldKHySYalCscAHiSpAJhxgsqeLBPekGSNGC',

        VITE_APP_URL_HKART: 'https://horsefiretablet.com/hkart',
        VITE_APP_API_KEY_HKART: 'pwmEpJULGxMCcfhKxeJWhSkfvywLnroMLBvxfeloaYaEtzkJiZ',

        NEXT_APP_URL_HFP: 'https://horsefiretablet.com/hfp',
        NEXT_APP_API_KEY_HFP: 'kkWOIDsGDFeyrGqwmjJMQhegGmcdNlBEjDVUOZbCJXtrAxgFgd',

        NEXT_APP_URL_BHF: 'https://horsefiretablet.com/bhf',
        NEXT_APP_API_KEY_BHF: 'asCseYWptcOXIbKNSvdAETNaHrRsEtgUqrarqtQLhgfUwnKufp',

        NEXT_APP_URL_BHFKT: 'https://horsefiretablet.com/bhfkt',
        NEXT_APP_API_KEY_BHFKT: 'swdOVeKMFfpoyAuAAohbnhkMzYRKDTryecyxqquFOaystdRutw',

        NEXT_APP_URL_HFS: 'https://horsefiretablet.com/hfs',
        NEXT_APP_API_KEY_HFS: 'gQTDQICnqMGqwTxZancSWaMMaZbqiYOOUbbBieOBuWJJqkOmYi',

        NEXT_APP_URL_AHF: 'https://horsefiretablet.com/ahf',
        NEXT_APP_API_KEY_AHF: 'PMyVvAraTgmbhebHdfqMswegEiFuuoYbohwmmMViWwivvtgVtm',

        NEXT_APP_URL_AHFKT: 'https://horsefiretablet.com/ahfkt',
        NEXT_APP_API_KEY_AHFKT: 'oqHLNQOMXlZxIYbiGLYoAQUaisxrpxXCUsiWrZMdrYtGTdkplb',

        NEXT_APP_URL_HFE: 'https://horsefiretablet.com/hfe',
        NEXT_APP_API_KEY_HFE: 'nqxWvgcDUzbUuvgNPljRnvpLyhWczXDKqHGWKpxLtoURzHegzh',

        NEXT_APP_URL_HFK: 'https://horsefiretablet.com/hfk',
        NEXT_APP_API_KEY_HFK: 'WdcIjRBvaINwqYCsPaCTpUYDPpXzORdskfEQHnKrmAgQeTDePJ',

        NEXT_APP_URL_HFM: 'https://horsefiretablet.com/hfm',
        NEXT_APP_API_KEY_HFM: 'rsbEpjWZdjeWesQFmTJGOGkpmWiSIgEpHaNbSPBVvwbFBgcfJh',

        NEXT_APP_URL_CJHF: 'https://horsefiretablet.com/cjhf',
        NEXT_APP_API_KEY_CJHF: 'yKQZQWibYTnkggRbyUWlbQmcvUkXkQLLqVheMXMJRZddLrRVCG',

        NEXT_APP_URL_HF01A: 'https://horsefiretablet.com/hf01a',
        NEXT_APP_API_KEY_HF01A: 'xIVFXIQIfblWfcshaOvImnzTDhsHJcJlDcjVYOebXezPfoniDY',

        NEXT_APP_URL_HF369CLICKADU: 'https://horsefiretablet.com/hf369clickadu/',
        NEXT_APP_API_KEY_HF369CLICKADU: 'jaHeAtKWbFBGTHpNqqFTogBCxJYPTLbPyRxUwIVmRKOwKFlyVY',


        NEXT_APP_URL_HF69H: 'https://horsefiretablet.com/hf69h',
        NEXT_APP_API_KEY_HF69H: 'YYVPvUovZBvoGYkTpxBHxuoBilQMOAMGYLcIdayrVSEETJOOEU',


        NEXT_APP_URL_HF69HCADU: 'https://horsefiretablet.com/hf69hcadu',
        NEXT_APP_API_KEY_HF69HCADU: 'NHldofRrFumQOOhfhsYsWzrEDzXgPNzipIybUQRdKoixBekoKt',


        NEXT_APP_URL_HF99: 'https://horsefiretablet.com/hf99',
        NEXT_APP_API_KEY_HF99: 'ouxZvRUbnXKSOMExbYgQfDWQFIHpHOCbFrehFmIwjQZwVQugRS',

        NEXT_APP_URL_HF99N: 'https://horsefiretablet.com/hf99n',
        NEXT_APP_API_KEY_HF99N: 'yvaKVxEPiEsvgoIfKVNazcQPJGLNOOoujvQNWyRxAInBRspZGe',

        NEXT_APP_URL_HFTSIN: 'https://horsefiretablet.com/hftsin',
        NEXT_APP_API_KEY_HFTSIN: 'lwMlIeKmHRURqZpOFUBnIsoUHqBZKtIrfIFLXsxWtdIfZdzmwj',

        // HFTdel Blog
        NEXT_APP_URL_HFTDEL: 'https://horsefiretablet.com/hftdel',
        NEXT_APP_API_KEY_HFTDEL: 'uxmdpAIZGCYUSDEcSXTENZYdKYBImksieMADmMlYlhXVbZAZkE',


        NEXT_APP_URL_HF71: 'https://horsefiretablet.com/hf71',
        NEXT_APP_API_KEY_HF71: 'YcgyoqRUdRaUPykuShfpFOPPdPdrPeVZDpLLsUHUHqTJioEhZh',

        NEXT_APP_URL_HF71N: 'https://horsefiretablet.com/hf71n',
        NEXT_APP_API_KEY_HF71N: 'jhVDIXdJUUqpdMECVLudFKXXkOEtONITOqrdrbVhGmaYFCcvOW',

        NEXT_APP_URL_HFTALP: 'https://horsefiretablet.com/hftalp',
        NEXT_APP_API_KEY_HFTALP: 'XkulkqtruBEHBIKfPYYkYWawsxWrwYQcRfJasPhjQWdKKdOdRl',

        NEXT_APP_URL_HFT01DOC: 'https://horsefiretablet.com/hft01doc',
        NEXT_APP_API_KEY_HFT01DOC: 'zOOkOOmADohZkgWXwxeXkNOWwajcSGYkTGoSZDvFobyhdbPbuH',

        NEXT_APP_URL_HFT01FDOC: 'https://horsefiretablet.com/hft01fdoc',
        NEXT_APP_API_KEY_HFT01FDOC: 'XzFDYQOTGIlZyAzjAfnrVMXXWDqkZjLtxDgsBHjYxzqQCaUZhe',

        NEXT_APP_URL_HFTSX: 'https://horsefiretablet.com/hftsx',
        NEXT_APP_API_KEY_HFTSX: 'CpPfddMFUPXhoxcQWmkZpxqxqglwyvciLUjGdEDcrkGQxqaEjw',

        NEXT_APP_URL_HFTSXF: 'https://horsefiretablet.com/hftsxf',
        NEXT_APP_API_KEY_HFTSXF: 'NvFidWKKzqrLCJubpZzmLtRzeIOnhsEKnEpvriIWxRSTolujyH',

        NEXT_APP_URL_HFRUSH: 'https://horsefiretablet.com/hfrush',
        NEXT_APP_API_KEY_HFRUSH: 'gUMxsubbVTldxyRdwtjMvVxLzDNWXqiAUOqAgJsjaDCaYZTrxs',

        NEXT_APP_URL_HFTXC: 'https://horsefiretablet.com/hftxc',
        NEXT_APP_API_KEY_HFTXC: 'uAQsSkFeuOWYqnwETxAGtpUpKBPIJKDMTvLxmlALLiWLkjiydN',

        // https://horsefiretablet.com/hfopt

        NEXT_APP_URL_HFOPT: 'https://horsefiretablet.com/hfopt',
        NEXT_APP_API_KEY_HFOPT: 'uifySfjPjxBfVDtiuJsgaiQgxbzTwSNxDQWNRxVoEtSggpjitd',

        NEXT_APP_URL_HXB: 'https://horsefiretablet.com/hxb',
        NEXT_APP_API_KEY_HXB: 'BGuWcwALHpWxDQWRnALkEOEveNUNXathPQmXqFDFbFCiHFSesy',

        NEXT_APP_URL_HFSTAR: 'https://horsefiretablet.com/hfstar',
        NEXT_APP_API_KEY_HFSTAR: 'oqxPTKgTBBoxZOWIfNtqyohwGAanFNYUoPgVwReQrBkKdEtHiX',

        NEXT_APP_URL_HFTAB: 'https://horsefiretablet.com/hftab',
        NEXT_APP_API_KEY_HFTAB: 'UBZrYoMxGWuYPacTEkVTLIMwPvhgtFDistWeomMTGWZdlTIGlc',

        NEXT_APP_URL_HFURI: 'https://horsefiretablet.com/hfuri',
        NEXT_APP_API_KEY_HFURI: 'wlYrWIyYvExyXBIXOwbamuouXeThRzRgzpUoGXkLPhhwpJUnay',




        NEXT_APP_URL_HFJSX: "https://horsefiretablet.com/hfjsx",
        NEXT_APP_API_KEY_HFJSX: "PcZnlQxftwOzigZPwHoRCgifHhJmJbeZYmDDTMcsTJEBLtladq",

        NEXT_APP_URL_HFJFLIP: "https://horsefiretablet.com/hfjflip",
        NEXT_APP_API_KEY_HFJFLIP: "lMsyxZnGGdrtBcxlEUikerEEUnemrGfNoywRhyZVPGOqCmmPmI",

        NEXT_APP_URL_HFT143F: "https://horsefiretablet.com/hft143f",
        NEXT_APP_API_KEY_HFT143F: "LrvOKwOLyuaeWXLlIdCHqxtlScLRTCJXzeIESDhUnXXZtyuRiU",

        NEXT_APP_URL_HFT143: 'https://horsefiretablet.com/hft143',
        NEXT_APP_API_KEY_HFT143: 'vXDoQjyBExAYbNqBTwnFSEhhZbwrGXpvhBMDFSLpRlHaxDwnpe',


        NEXT_APP_URL_HFTLH6: 'https://horsefiretablet.com/hftlh6',
        NEXT_APP_API_KEY_HFTLH6: 'yKzHeXmZEaMpYFZFtmbmhSDlrrTtPAiaosmDacpttKrsPCpVtI',

        NEXT_APP_URL_HFTLH6F: 'https://horsefiretablet.com/hftlh6f',
        NEXT_APP_API_KEY_HFTLH6F: 'YwDSjSKbZSOVLgxmxDOGyoxQMtahOLfcomnSrcPOEkssxHVzki',

        NEXT_APP_URL_HFTCHECK: 'https://horsefiretablet.com/hftcheck',
        NEXT_APP_API_KEY_HFTCHECK: 'hddtdPrjmiRGxVMfWmkuXzKmQYQevRIITLIRVDcYrfwFguStrL',

        // https://horsefiretablet.com/hftcheck

        NEXT_APP_URL_HFTCHKFLIP: 'https://horsefiretablet.com/hftchkflip',
        NEXT_APP_API_KEY_HFTCHKFLIP: 'UbnUFNZJoUCKFZxeLCXCgpQeTFghTXuKUisGZhmISLJuLKEQKf',

        NEXT_APP_URL_HFTORAL69: 'https://horsefiretablet.com/hftoral69',
        NEXT_APP_API_KEY_HFTORAL69: 'QWqgOXvYOkaXCHUmEfYFPPGrabEdZbaASjwGISVLoBQvSNlIAM',

        NEXT_APP_URL_HFTORAL69F: 'https://horsefiretablet.com/hftoral69f',
        NEXT_APP_API_KEY_HFTORAL69F: 'bKgCDKRTOXNaJfgpKsYrEnxRxrQzHeNSfgHerwMSzCRPvpVxeQ',

        NEXT_APP_URL_HFTS: 'https://horsefiretablet.com/hfts',
        NEXT_APP_API_KEY_HFTS: 'jmOgvFaJUCfzrWpOSBrBIAxVvFEXeqHEODaklGNFSpEJKqCgsn',


        NEXT_APP_URL_HFTRX: 'https://horsefiretablet.com/hftrx',
        NEXT_APP_API_KEY_HFTRX: 'nqgkQfoyyBMZluwHRkgvUVpMcglLULbUGYBPKtLGdbxrsoLSlP',


        NEXT_APP_URL_HFTRCI: 'https://horsefiretablet.com/hftrci',
        NEXT_APP_API_KEY_HFTRCI: 'phMymoNUDRVpfxYVAeYtNiCEuXugDaopjtUrPbzmuGsHNzMvjr',

        NEXT_APP_URL_HFTRCIF: 'https://horsefiretablet.com/hftrcif',
        NEXT_APP_API_KEY_HFTRCIF: 'rzybMKhHXGbvsJTjBbqmEmgUcmSUdeXVZewultZEpsvocLkgtP',


        NEXT_APP_URL_HFTENG: 'https://horsefiretablet.com/hfteng',
        NEXT_APP_API_KEY_HFTENG: 'anpElgNgGUpapmKzGpgJXyaSsmwZbOBdVtONvhDSiGgjRmzaCm',



        NEXT_APP_URL_HFTENGF: 'https://horsefiretablet.com/hftengf',
        NEXT_APP_API_KEY_HFTENGF: 'NxyhTUiHbXXGtEHypPJBgdxVEZBUHEGSnIGnFjpsBJwsEidUtf',

        NEXT_APP_URL_ENGHFTF: 'https://horsefiretablet.com/enghftf',
        NEXT_APP_API_KEY_ENGHFTF: 'XrimmLvnftooLMcknnbrzAXTFVjtGsiYserlbIRJzfrPVYFKFX',

        NEXT_APP_URL_ENGHFT: 'https://horsefiretablet.com/enghft',
        NEXT_APP_API_KEY_ENGHFT: 'hMhsyCiXcLeUXlTmtpkqlBJYWMGhEcUDGBUSXoEwKCbCvMhvae',


        NEXT_APP_URL_HFTBENGAL: 'https://horsefiretablet.com/hftbng',
        NEXT_APP_API_KEY_HFTBENGAL: 'isTdUuUkWSRItGVCiiUIePRkywACwKOpzmTqIyyFeodgETkySg',


        NEXT_APP_URL_HFTBENGALF: 'https://horsefiretablet.com/hftbngf',
        NEXT_APP_API_KEY_HFTBENGALF: 'IHadGrDDmJmPaeWjRqgnsQgQeEDGOLAwZidxhHXcLXdmUBmhdA',

        NEXT_APP_URL_HFTPRO: 'https://horsefiretablet.com/hftpro',
        NEXT_APP_API_KEY_HFTPRO: 'VazZlCRtpdRUXRQboksfOUzOjaXjFGNnGdbJdbSEcISTiSaULP',

        NEXT_APP_URL_HFTPROF: 'https://horsefiretablet.com/hftprof',
        NEXT_APP_API_KEY_HFTPROF: 'JEyZALXsYNLLdGgAvsltzMDGoNaqbrFgSDNRAtHssmMnXfhvgB',

        // https://horsefiretablet.com/hfxyc


        NEXT_APP_URL_HFXYC: 'https://horsefiretablet.com/hfxyc',
        NEXT_APP_API_KEY_HFXYC: 'NVQghoWfKXuwWUmfcngKGKYpxAJxpQMrfePNxqkcMjVIMvKWgQ',

        NEXT_APP_URL_HFXYCFLP: 'https://horsefiretablet.com/hfxycflp',
        NEXT_APP_API_KEY_HFXYCFLP: 'XOxGNqbJygENbImJsWZSABvSciDmwohBVGSGEKzbqAdVPFUciy',

        // https://horsefiretablet.com/hfsxy
        NEXT_APP_URL_HFSXY: 'https://horsefiretablet.com/hfsxy',
        NEXT_APP_API_KEY_HFSXY: 'PoohfMfHSHeUOjcTAIpQzXFFqXxxBFduXTvSWRnxQOwoZXNAfm',

        NEXT_APP_URL_HFSXYFLIP: 'https://horsefiretablet.com/hfsxyflip',
        NEXT_APP_API_KEY_HFSXYFLIP: 'wwREuomsIcuLVyCxeSlxuzarelGnmXiACLSDZMgnnpvmAjaBWY',




        // QLSNDVUpSPAWQxtFWIYONmIeEhWYVCKltnXUMHZXQqfiTOfrGA


        NEXT_APP_URL_HFCK: 'https://horsefiretablet.com/hfck',
        NEXT_APP_API_KEY_HFCK: 'QLSNDVUpSPAWQxtFWIYONmIeEhWYVCKltnXUMHZXQqfiTOfrGA',


        NEXT_APP_URL_HFCKFLIP: 'https://horsefiretablet.com/hfckflip',
        NEXT_APP_API_KEY_HFCKFLIP: 'aKGCFbnqkimFXrCbWLIbVmlYuTnibOzmnEzJeobBDtPziAAxPR',


        NEXT_APP_URL_HFTRAZF: 'https://horsefiretablet.com/hftrazf',
        NEXT_APP_API_KEY_HFTRAZF: 'cIbsRWTgVpzuerHpTNzLXLqYnluhubcNtLmJDIFsJsIimFNgLG',

        NEXT_APP_URL_HFTRAZ: 'https://horsefiretablet.com/hftraz',
        NEXT_APP_API_KEY_HFTRAZ: 'usbofEQaeSbBPutKdgYHcIzLyGwJFnENcRRBdSenPJjcvQoOOn',


        NEXT_APP_URL_HFTJC: 'https://horsefiretablet.com/hftjc',
        NEXT_APP_API_KEY_HFTJC: 'SGcZuIaqEnWBELFcILIbTCLoigOXtDARTktRGbRUPEGGhugpvA',

        NEXT_APP_URL_HFTJCF: 'https://horsefiretablet.com/hftjcf',
        NEXT_APP_API_KEY_HFTJCF: 'lBsLergXDVlctnHwDHdXwwYbDurLfnZYQciSGtNlAWKVwWSMPU',


        NEXT_APP_URL_HFTAI: 'https://horsefiretablet.com/hftai',
        NEXT_APP_API_KEY_HFTAI: 'AmFSrLhoqZyXjjpDjRtYWDeGkJkehCXfZVKWkbPSbevQplXDaP',

        // https://horsefiretablet.com/hfspr


        NEXT_APP_URL_HFSPR: 'https://horsefiretablet.com/hfspr',
        NEXT_APP_API_KEY_HFSPR: 'ZMWRqHpfOdDyHmQYBzBtOZLJtOlNhXkPHyJokJxZXgvenZdjaB',

        // https://horsefiretablet.com/hfchk

        NEXT_APP_URL_HFCHK: 'https://horsefiretablet.com/hfchk',
        NEXT_APP_API_KEY_HFCHK: 'plAnDNYMpiGMWNsXIhRQHkRGnxEMtxJKygtvylBjhMpfdwbuSN',

        NEXT_APP_URL_HFTNXT: 'https://horsefiretablet.com/hftnxt',
        NEXT_APP_API_KEY_HFTNXT: 'xdPAOjFWEJXIKrPssVURdrDAekLlegPbTuRBwXJhVukqwPHFtN',


        NEXT_APP_URL_HFTNXTF: 'https://horsefiretablet.com/hftnxtf',
        NEXT_APP_API_KEY_HFTNXTF: 'VdlyQpWEviuqsMNSPajVMurSsTEHaVBydpGFlOhYvChBqttlRw',


        // https://horsefiretablet.com/hftjnt


        // horsefiretablet.com/hftvht

        NEXT_APP_URL_HFTVHT: 'https://horsefiretablet.com/hftvht',
        NEXT_APP_API_KEY_HFTVHT: 'vPpQYvlqZPVdyJrUwtJgKRRmVoUrrbsyGUmLlFeaAmPOZjaasS',


        NEXT_APP_URL_HFTVHTF: 'https://horsefiretablet.com/hftvhtf',
        NEXT_APP_API_KEY_HFTVHTF: 'oYvyqiXiiynAFnlMKPayBHZJCyjDGUvMqeanWBkXbACdHsksot',




        NEXT_APP_URL_HFTJNT: 'https://horsefiretablet.com/hftjnt',
        NEXT_APP_API_KEY_HFTJNT: 'qYssZueECtWDNirDXRKQRPRxojrDjmxDuTocXkNhqvUupuqeWI',

        NEXT_APP_URL_HFTV: 'https://horsefiretablet.com/hftv',
        NEXT_APP_API_KEY_HFTV: 'eNWBshbAUxfoUzVHhZCxVQKMIBUsSIDqKpJuXbqLwIJeebgoUj',

        NEXT_APP_URL_HFENGF: 'https://horsefiretablet.com/hfengf',
        NEXT_APP_API_KEY_HFENGF: 'PWBkRxxDOfWukCGvmJPAtrOhEqCcRtvhXQwDqVJOExAypjMkEk',

        NEXT_APP_URL_HFTGF: 'https://horsefiretablet.com/hftgf',
        NEXT_APP_API_KEY_HFTGF: 'fkaqAOJXXBhpfCfVGAVqlOMqIXMfDHUnJCmIQMLcRVBVcDVqNo',

        NEXT_APP_URL_HFTGF: 'https://horsefiretablet.com/hftgf',
        NEXT_APP_API_KEY_HFTGF: 'fkaqAOJXXBhpfCfVGAVqlOMqIXMfDHUnJCmIQMLcRVBVcDVqNo',

        NEXT_APP_URL_HFTSZF: 'https://horsefiretablet.com/hftszf',
        NEXT_APP_API_KEY_HFTSZF: 'pZyIlglYojsByqUrIlbAQlpnwhYznfcrAkTCNvKnKKiaQWJiQT',

    },


    images: {
        unoptimized: true,
    },
    trailingSlash: true,

    output: "export",
    reactStrictMode: false

}

module.exports = nextConfig;

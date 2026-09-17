// Dữ liệu 49 văn phòng hỗ trợ, lấy từ trang liên hệ của fis247.fpt.com.
// Tất cả văn phòng dùng chung một số tổng đài nên không lặp lại trong từng mục.
export const OFFICE_PHONE = "1800 6861/ line 3";

export type Region = "bac" | "trung" | "nam";

export const REGIONS: { id: Region | "all"; label: string }[] = [
  { id: "all", label: "Toàn quốc" },
  { id: "bac", label: "Miền Bắc" },
  { id: "trung", label: "Miền Trung" },
  { id: "nam", label: "Miền Nam" },
];

export type Office = {
  id: string;
  name: string;
  /** Tên rút gọn để hiện trong danh sách, đã bỏ chữ "Văn phòng" lặp lại */
  short: string;
  address: string;
  /** Chuỗi tìm kiếm dùng cho iframe Google Maps; bản gốc dùng địa danh cũ nên
      giữ nguyên chuỗi của họ thay vì suy ra từ address đã đổi tên tỉnh. */
  mapQuery: string;
  region: Region;
  /** Toạ độ tỉnh lỵ để chấm lên bản đồ, nguồn Natural Earth 1:10m.
      Đây là toạ độ thành phố chứ không phải toạ độ chính xác của toà nhà. */
  lon: number;
  lat: number;
};

export const OFFICES: Office[] = [
  {
    id: "vp0",
    name: "Văn phòng Hà Nội",
    short: "Hà Nội",
    address: "Tầng 11, Tòa nhà Keangnam Landmark 72, E6 Phạm Hùng, Từ Liêm, Hà Nội",
    mapQuery: "Tầng 11, Tòa nhà Keangnam Landmark 72, E6 Phạm Hùng, Nam Từ Liêm, Hà Nội",
    region: "bac",
    lon: 105.848068,
    lat: 21.035273
  },
  {
    id: "vp1",
    name: "Văn phòng Bắc Ninh (Bắc Giang cũ)",
    short: "Bắc Ninh (Bắc Giang cũ)",
    address: "Số 140 Lê Lai, Phường Bắc Giang, tỉnh Bắc Ninh",
    mapQuery: "140 Lê Lai, Hoàng Văn Thụ - Bắc Giang",
    region: "bac",
    lon: 106.200019,
    lat: 21.267008
  },
  {
    id: "vp2",
    name: "Văn phòng Bắc Ninh",
    short: "Bắc Ninh",
    address: "Số 189 Hoàng Quốc Việt, khu phố Thị Cầu 2, phường Vũ Ninh, Bắc Ninh",
    mapQuery: "189 Hoàng Quốc Việt, Thị Cầu, Bắc Ninh",
    region: "bac",
    lon: 106.076,
    lat: 21.186
  },
  {
    id: "vp3",
    name: "Văn phòng Đà Nẵng",
    short: "Đà Nẵng",
    address: "Tầng 8, Tòa nhà ICT1 - CVPM số 2, đường Như Nguyệt, Phường Hải Châu, TP Đà Nẵng",
    mapQuery: "Tầng 8, toà nhà ICT1, khu Công Viên Phần Mềm số 2, đường Như Nguyệt, phường Thuận Phước, Quận Hải Châu, TP Đà Nẵng",
    region: "trung",
    lon: 108.249971,
    lat: 16.060039
  },
  {
    id: "vp4",
    name: "Văn phòng Đắk Lắk",
    short: "Đắk Lắk",
    address: "Số 8 tầng 17 Block A, 40 Hùng Vương P.Tự An, TP Buôn Ma Thuột, Đắk Lắk",
    mapQuery: "Số 8 tầng 17 Block A, 40 Hùng Vương P.Tự An, TP. Buôn Ma Thuột, Dak Lak",
    region: "trung",
    lon: 108.049983,
    lat: 12.667042
  },
  {
    id: "vp5",
    name: "Văn phòng Đắk Lắk (Phú Yên cũ)",
    short: "Đắk Lắk (Phú Yên cũ)",
    address: "Số 7/71 Lý Thái Tổ, Phường 6, TP Tuy Hòa, tỉnh Đắk Lắk",
    mapQuery: "số 7/71 Lý Thái Tổ, Phường 6, TP Tuy Hòa, tỉnh Phú Yên",
    region: "trung",
    lon: 109.315999,
    lat: 13.082004
  },
  {
    id: "vp6",
    name: "Văn phòng Gia Lai (Bình Định cũ)",
    short: "Gia Lai (Bình Định cũ)",
    address: "323 Hoa Lư, phường Đống Đa, Quy Nhơn, tỉnh Gia Lai",
    mapQuery: "323 Hoa Lư, phường Đống Đa, Quý Nhơn, Bình Định",
    region: "trung",
    lon: 109.180043,
    lat: 13.779972
  },
  {
    id: "vp7",
    name: "Văn phòng Gia Lai",
    short: "Gia Lai",
    address: "16 Âu Dương Lân, TP Pleiku, tỉnh Gia Lai",
    mapQuery: "16 Âu Dương Lân, Pleiku, Gia Lai",
    region: "trung",
    lon: 108.000012,
    lat: 13.983292
  },
  {
    id: "vp8",
    name: "Văn phòng Hà Tĩnh",
    short: "Hà Tĩnh",
    address: "Thôn Nam Thượng, xã Thạch Đài, TP Hà Tĩnh, tỉnh Hà Tĩnh",
    mapQuery: "Thôn Nam Thượng xã Thạch Đài, Tp. Hà Tĩnh, Hà Tĩnh",
    region: "trung",
    lon: 105.900037,
    lat: 18.333776
  },
  {
    id: "vp9",
    name: "Văn phòng Hải Phòng (Hải Dương cũ)",
    short: "Hải Phòng (Hải Dương cũ)",
    address: "20 Trần Bình Trọng, TP Hải Phòng",
    mapQuery: "20 Trần Bình Trọng - TP Hải Dương",
    region: "bac",
    lon: 106.331005,
    lat: 20.942001
  },
  {
    id: "vp10",
    name: "Văn phòng Hải Phòng",
    short: "Hải Phòng",
    address: "P305 - Tòa nhà da giầy Hải Phòng, 275 Lạch Tray, TP Hải Phòng",
    mapQuery: "P305 - Tòa nhà da giầy Hải Phòng, 275 Lạch Tray - Hải Phòng",
    region: "bac",
    lon: 106.678147,
    lat: 20.831952
  },
  {
    id: "vp11",
    name: "Văn phòng Huế",
    short: "Huế",
    address: "Phòng A211, Chung cư Vicoland, Phường Xuân Phú, Thành phố Huế, Tỉnh Thừa Thiên Huế",
    mapQuery: "Phòng A211, Chung cư Vicoland, Xuân Phú, Thành phố Huế, Tỉnh Thừa Thiên Huế",
    region: "trung",
    lon: 107.580038,
    lat: 16.469988
  },
  {
    id: "vp12",
    name: "Văn phòng Hưng Yên",
    short: "Hưng Yên",
    address: "673 Nguyễn Văn Linh, Phường Hiến Nam, TP Hưng Yên",
    mapQuery: "673 Nguyễn Văn Linh - P Hiến Nam - Hưng Yên",
    region: "bac",
    lon: 106.051,
    lat: 20.646
  },
  {
    id: "vp13",
    name: "Văn phòng Hưng Yên (Thái Bình cũ)",
    short: "Hưng Yên (Thái Bình cũ)",
    address: "Số 20 Ngõ 74 Đường Trần Nhật Duật, Phường Bồ Xuyên, TP Hưng Yên",
    mapQuery: "Số 20 Ngõ 74 Đường Trần Nhật Duật, P. Bồ Xuyên, TP Thái Bình",
    region: "bac",
    lon: 106.33303,
    lat: 20.450304
  },
  {
    id: "vp14",
    name: "Văn phòng Khánh Hòa",
    short: "Khánh Hòa",
    address: "Tầng 10 - 42 Lê Thành Phương, Phường Phương Sài, TP Nha Trang, tỉnh Khánh Hòa",
    mapQuery: "Tầng 10 - 42 Lê Thành Phương, P. Phương Sài, TP. Nha Trang",
    region: "trung",
    lon: 109.170018,
    lat: 12.250039
  },
  {
    id: "vp15",
    name: "Văn phòng Khánh Hòa (Ninh Thuận cũ)",
    short: "Khánh Hòa (Ninh Thuận cũ)",
    address: "18/1/14 Lương Ngọc Quyến, phường Phủ Hà, TP Phan Rang - Tháp Chàm, tỉnh Khánh Hòa",
    mapQuery: "18/1/14 Lương Ngọc Quyến, phường Phủ Hà, Phan Rang Tháp Chàm, Ninh Thuận",
    region: "trung",
    lon: 108.983311,
    lat: 11.567032
  },
  {
    id: "vp16",
    name: "Văn phòng Lạng Sơn",
    short: "Lạng Sơn",
    address: "Số 15/5 Mỹ Sơn 5, phường Vĩnh Trại, TP Lạng Sơn, Tỉnh Lạng Sơn",
    mapQuery: "Số 15/5 Mỹ Sơn 5, phường Vĩnh Trại, TP Lạng Sơn, Tỉnh Lạng Sơn",
    region: "bac",
    lon: 106.757002,
    lat: 21.845997
  },
  {
    id: "vp17",
    name: "Văn phòng Lào Cai",
    short: "Lào Cai",
    address: "867 Lê Thanh, Phường Bắc Cường, TP Lào Cai, Tỉnh Lào Cai",
    mapQuery: "867 Lê Thanh, Bắc Cường, Lào Cai.",
    region: "bac",
    lon: 103.965995,
    lat: 22.501351
  },
  {
    id: "vp18",
    name: "Văn phòng Lào Cai (Yên Bái cũ)",
    short: "Lào Cai (Yên Bái cũ)",
    address: "116 Lê Chân, Phường Nam Cường, TP Lào Cai, tỉnh Lào Cai",
    mapQuery: "116 Lê Chân - Nam Cường - Yên Bái",
    region: "bac",
    lon: 104.875003,
    lat: 21.705003
  },
  {
    id: "vp19",
    name: "Văn phòng Nghệ An",
    short: "Nghệ An",
    address: "Tầng 4 tòa nhà Huệ Lộc – Số 146 Nguyễn Sỹ Sách, Phường Trường Vinh, TP Vinh, Nghệ An",
    mapQuery: "Tầng 4 tòa nhà Huệ Lộc - Số 146 Nguyễn Sỹ Sách, P.Hưng Phúc, TP.Vinh, Nghệ An",
    region: "trung",
    lon: 105.679999,
    lat: 18.699981
  },
  {
    id: "vp20",
    name: "Văn phòng Ninh Bình (Hà Nam cũ)",
    short: "Ninh Bình (Hà Nam cũ)",
    address: "Tổ dân phố Cẩm Du, thị trấn Tân Thanh, huyện Thanh Liêm, tỉnh Ninh Bình",
    mapQuery: "Tổ dân phố Cẩm du thị trấn Tân thanh, thanh liêm.Hà Nam",
    region: "bac",
    lon: 105.913,
    lat: 20.541
  },
  {
    id: "vp21",
    name: "Văn phòng Ninh Bình (Nam Định cũ)",
    short: "Ninh Bình (Nam Định cũ)",
    address: "Thửa đất số 30, 31, KCN Hòa Xá, TP Ninh Bình, tỉnh Ninh Bình",
    mapQuery: "Thửa 30,31 KCN Hòa Xá, Nam Định",
    region: "bac",
    lon: 106.200019,
    lat: 20.420031
  },
  {
    id: "vp22",
    name: "Văn phòng Ninh Bình",
    short: "Ninh Bình",
    address: "Số 13 đường Lý Nhân Tông, Phố Thanh Xuân, Phường Bích Đào, TP Ninh Bình, tỉnh Ninh Bình",
    mapQuery: "Số 13 đường Lý Nhân Tông, Phố Thanh Xuân, Phường Bích Đào, TP Ninh Bình, Tỉnh Ninh Bình",
    region: "bac",
    lon: 105.97502,
    lat: 20.254305
  },
  {
    id: "vp23",
    name: "Văn phòng Phú Thọ (Hòa Bình cũ)",
    short: "Phú Thọ (Hòa Bình cũ)",
    address: "SN 68A, Phường Thịnh Lang, TP Phú Thọ",
    mapQuery: "SN 68A, P.Thịnh Lang, TP Hòa Bình",
    region: "bac",
    lon: 105.338314,
    lat: 20.813702
  },
  {
    id: "vp24",
    name: "Văn phòng Phú Thọ",
    short: "Phú Thọ",
    address: "Khu 2, xã Kim Đức, TP Việt Trì, tỉnh Phú Thọ",
    mapQuery: "Khu 2 xã Kim Đức, TP Việt Trì , Tỉnh Phú Thọ",
    region: "bac",
    lon: 105.429988,
    lat: 21.330415
  },
  {
    id: "vp25",
    name: "Văn phòng Phú Thọ (Vĩnh Phúc cũ)",
    short: "Phú Thọ (Vĩnh Phúc cũ)",
    address: "Phố Me, thị trấn Hợp Hòa, huyện Tam Dương, tỉnh Phú Thọ",
    mapQuery: "Phố Me, TT Hợp Hòa, Tam Dương, Vĩnh Phúc",
    region: "bac",
    lon: 105.575,
    lat: 21.345
  },
  {
    id: "vp26",
    name: "Văn phòng Quảng Ngãi (Kon Tum cũ)",
    short: "Quảng Ngãi (Kon Tum cũ)",
    address: "Đường Nguyễn Lân, Tổ 1, Phường Ngô Mây, TP Quảng Ngãi",
    mapQuery: "Đường Nguyễn Lân, Tổ 1 Phường Ngô Mây, TP Kon Tum, Tỉnh Kon Tum",
    region: "trung",
    lon: 107.983321,
    lat: 14.383759
  },
  {
    id: "vp27",
    name: "Văn phòng Quảng Ngãi",
    short: "Quảng Ngãi",
    address: "333 Trần Hưng Đạo, TP Quảng Ngãi, tỉnh Quảng Ngãi",
    mapQuery: "333 Trần Hưng Đạo, Quảng Ngãi",
    region: "trung",
    lon: 108.829987,
    lat: 15.150431
  },
  {
    id: "vp28",
    name: "Văn phòng Quảng Ninh",
    short: "Quảng Ninh",
    address: "B0622 tầng 6, Chung cư LIDECO, Phường Trần Hưng Đạo, TP Hạ Long, tỉnh Quảng Ninh",
    mapQuery: "B0622 tầng 6 Chung cư LIDECO, P. Trần Hưng Đạo, TP. Hạ Long",
    region: "bac",
    lon: 107.100015,
    lat: 20.960412
  },
  {
    id: "vp29",
    name: "Văn phòng Quảng Trị (Quảng Bình cũ)",
    short: "Quảng Trị (Quảng Bình cũ)",
    address: "Thôn Đức Môn, xã Đức Ninh, TP Quảng Trị",
    mapQuery: "THôn Đức Môn - Đức Ninh- Tp Đồng Hới- Quảng Bình",
    region: "trung",
    lon: 106.600046,
    lat: 17.483337
  },
  {
    id: "vp30",
    name: "Văn phòng Quảng Trị",
    short: "Quảng Trị",
    address: "Xóm Dưới, Khu phố Đại Áng, Phường Đông Lương, TP Đông Hà, tỉnh Quảng Trị",
    mapQuery: "xóm Dưới, khu phố Đại Áng, phường Đông Lương, Đông Hà, Quảng Trị",
    region: "trung",
    lon: 107.133301,
    lat: 16.849998
  },
  {
    id: "vp31",
    name: "Văn phòng Thái Nguyên",
    short: "Thái Nguyên",
    address: "Tầng 5, TTTM Sao Việt, 66 Hoàng Văn Thụ, TP Thái Nguyên, tỉnh Thái Nguyên",
    mapQuery: "Tầng 5 TTTM Sao Việt 66 Hoàng Văn Thụ, TP. Thái Nguyên",
    region: "bac",
    lon: 105.830015,
    lat: 21.599959
  },
  {
    id: "vp32",
    name: "Văn phòng Thanh Hóa",
    short: "Thanh Hóa",
    address: "Số 9B, Ngõ Nhà Bảng, Phường Ba Đình, TP Thanh Hóa, tỉnh Thanh Hóa",
    mapQuery: "Số 9B, Ngõ Nhà Bảng, Phường Ba Đình, Thành Phố Thanh Hoá",
    region: "trung",
    lon: 105.799991,
    lat: 19.820016
  },
  {
    id: "vp33",
    name: "Văn phòng An Giang",
    short: "An Giang",
    address: "203B9 Huỳnh Thúc Kháng, Phường Bình Khánh, TP Long Xuyên, tỉnh An Giang",
    mapQuery: "203B9 Huỳnh Thúc Kháng, P.Bình Khánh, TP.Long Xuyên, An Giang",
    region: "nam",
    lon: 105.420015,
    lat: 10.380386
  },
  {
    id: "vp34",
    name: "Văn phòng An Giang (Kiên Giang cũ)",
    short: "An Giang (Kiên Giang cũ)",
    address: "Lô D08 căn số/Lô 56 Đường số 2, KĐT Tây Bắc, Phường Vĩnh Quang, TP Long Xuyên, tỉnh An Giang",
    mapQuery: "Lô D08 căn số/Lô 56 Đường số 2 , KĐT Tây Bắc,Phường Vĩnh Quang, Rạch Giá, Kiên Giang",
    region: "nam",
    lon: 105.091352,
    lat: 10.015395
  },
  {
    id: "vp35",
    name: "Văn phòng Cà Mau",
    short: "Cà Mau",
    address: "12A Nguyễn Du, Phường 5, TP Cà Mau, tỉnh Cà Mau",
    mapQuery: "12 A Nguyễn Du , P5, TP. Cà mau",
    region: "nam",
    lon: 105.150005,
    lat: 9.177358
  },
  {
    id: "vp36",
    name: "Văn phòng Cần Thơ",
    short: "Cần Thơ",
    address: "Số 12, đường A4, KDC Hưng Phú, Phường Hưng Phú, Quận Cái Răng, TP Cần Thơ",
    mapQuery: "Số 12, đường A4, KDC Hưng Phú, P.Hưng Phú, Q.Cái Răng, TP.Cần Thơ",
    region: "nam",
    lon: 105.770019,
    lat: 10.049993
  },
  {
    id: "vp37",
    name: "Văn phòng Cần Thơ (Sóc Trăng cũ)",
    short: "Cần Thơ (Sóc Trăng cũ)",
    address: "C2-51, Khu nhà ở Thương Mại Trần Quang Diệu, đường Trần Quang Diệu, Khóm 4, Phường 2, TP Cần Thơ",
    mapQuery: "C2-51, khu nhà ở Thương Mại Trần Quang Diệu , đường Trần Quang Diệu , khóm 4, phường 2 , Thành phố Sóc Trăng , tỉnh Sóc Trăng",
    region: "nam",
    lon: 105.980032,
    lat: 9.603741
  },
  {
    id: "vp38",
    name: "Văn phòng Đồng Nai",
    short: "Đồng Nai",
    address: "J14 đường N4, Khu phố 1, Phường Bửu Long, TP Biên Hòa, tỉnh Đồng Nai",
    mapQuery: "J14 đường N4, KP1, phường Bửu Long, Biên Hòa - Đồng Nai",
    region: "nam",
    lon: 106.830058,
    lat: 10.970014
  },
  {
    id: "vp39",
    name: "Văn phòng Đồng Nai (Bình Phước cũ)",
    short: "Đồng Nai (Bình Phước cũ)",
    address: "J14 đường N4, Khu phố 1, Phường Bửu Long, TP Biên Hòa, tỉnh Đồng Nai",
    mapQuery: "J14 đường N4, KP1, phường Bửu Long, Biên Hòa - Đồng Nai",
    region: "nam",
    lon: 106.830058,
    lat: 10.970014
  },
  {
    id: "vp40",
    name: "Văn phòng Đồng Tháp (Tiền Giang cũ)",
    short: "Đồng Tháp (Tiền Giang cũ)",
    address: "206 Đường Nguyễn Thị Thập, Phường 10, TP Đồng Tháp, tỉnh Đồng Tháp",
    mapQuery: "206 Đường Nguyễn Thị Thập F10, TP Mỹ Tho, Tỉnh Tiền Giang",
    region: "nam",
    lon: 106.350035,
    lat: 10.350413
  },
  {
    id: "vp41",
    name: "Văn phòng Hồ Chí Minh",
    short: "Hồ Chí Minh",
    address: "261-263 Phan Xích Long, Phường 2, Quận Phú Nhuận, TP Hồ Chí Minh",
    mapQuery: "261-263 Phan Xích Long phường 2 Quận Phú Nhuận",
    region: "nam",
    lon: 106.702985,
    lat: 10.762125
  },
  {
    id: "vp42",
    name: "Văn phòng Hồ Chí Minh (Vũng Tàu cũ)",
    short: "Hồ Chí Minh (Vũng Tàu cũ)",
    address: "28 Trần Khánh Dư, Phường 7, TP Hồ Chí Minh",
    mapQuery: "28 Trần Khánh Dư , Phường 7, TP Vũng tàu",
    region: "nam",
    lon: 107.084978,
    lat: 10.355374
  },
  {
    id: "vp43",
    name: "Văn phòng Hồ Chí Minh (Thủ Đức cũ)",
    short: "Hồ Chí Minh (Thủ Đức cũ)",
    address: "261-263 Phan Xích Long, Phường 2, Quận Phú Nhuận, TP Hồ Chí Minh",
    mapQuery: "261-263 Phan Xích Long phường 2 Quận Phú Nhuận",
    region: "nam",
    lon: 106.702985,
    lat: 10.762125
  },
  {
    id: "vp44",
    name: "Văn phòng Hồ Chí Minh (Bình Dương cũ)",
    short: "Hồ Chí Minh (Bình Dương cũ)",
    address: "Số 55 Đường N13, KDC Phú Hòa 1, Phường Phú Hòa, TP Hồ Chí Minh",
    mapQuery: "Số 55 Đường N13, KDC Phú Hòa 1, Phường Phú Hòa, TP Thủ dầu một Tỉnh Bình Dương",
    region: "nam",
    lon: 106.652745,
    lat: 10.969074
  },
  {
    id: "vp45",
    name: "Văn phòng Lâm Đồng (Đà Lạt cũ)",
    short: "Lâm Đồng (Đà Lạt cũ)",
    address: "Lô E46 – KQH Phạm Hồng Thái, Phường Xuân Hương, TP Đà Lạt, tỉnh Lâm Đồng",
    mapQuery: "Lô E46 - KQH Phạm Hồng Thái, P10, TP Đà Lạt",
    region: "nam",
    lon: 108.419986,
    lat: 11.93042
  },
  {
    id: "vp46",
    name: "Văn phòng Lâm Đồng (Bình Thuận cũ)",
    short: "Lâm Đồng (Bình Thuận cũ)",
    address: "Lô E46 – KQH Phạm Hồng Thái, Phường Xuân Hương, TP Đà Lạt, tỉnh Lâm Đồng",
    mapQuery: "Lô E46 - KQH Phạm Hồng Thái, P10, TP Đà Lạt",
    region: "nam",
    lon: 108.419986,
    lat: 11.93042
  },
  {
    id: "vp47",
    name: "Văn phòng Tây Ninh",
    short: "Tây Ninh",
    address: "31A Nguyễn Văn Cừ, Khu phố 3, Phường 2, TP Tây Ninh, tỉnh Tây Ninh",
    mapQuery: "31A Nguyễn Văn Cừ, Khu phố 3, Phường 2 , thành phố Tây Ninh , tỉnh Tây Ninh",
    region: "nam",
    lon: 106.147,
    lat: 11.322999
  },
  {
    id: "vp48",
    name: "Văn phòng Vĩnh Long (Trà Vinh cũ)",
    short: "Vĩnh Long (Trà Vinh cũ)",
    address: "184/7 Nguyễn Chí Thanh, Khóm 6, Phường Trà Vinh, Vĩnh Long",
    mapQuery: "184 Nguyễn Chí Thanh, Phường 6, Trà Vinh, Việt Nam",
    region: "nam",
    lon: 106.334002,
    lat: 9.934002
  }
];

/** URL nhúng Google Maps — dạng ?q=&output=embed không cần API key. */
export function mapEmbedUrl(office: Office) {
  return `https://www.google.com/maps?q=${encodeURIComponent(office.mapQuery)}&output=embed`;
}

import fs from "fs";

export function ChampBan() {
  const filePath = "./Ban/ban.json";
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.error("파일 읽기 오류:", err);
      return;
    }

    try {
      // JSON 문자열을 JavaScript 객체로 변환
      const jsonData = JSON.parse(data);

      const jsonString = JSON.stringify(jsonData, null, 2); // 두 번째 매개변수는 들여쓰기, 2는 2칸 들여쓰기를 의미

      fs.writeFileSync(filePath, jsonString, "utf-8");

      return "밴 완료";
    } catch (parseError) {
      console.error("JSON 파싱 오류:", parseError);
      return "밴 실패";
    }
  });
  // JavaScript 객체를 JSON 문자열로 변환
}

import type { Stage } from '../types/game';

export const gameStages: Stage[] = [
  // MÀN 1: Bối cảnh thời kỳ quá độ
  {
    id: 1,
    title: 'Bối cảnh thời kỳ quá độ',
    description: 'Tìm hiểu đặc điểm xã hội Việt Nam trong thời kỳ quá độ',
    objective: 'Giúp người chơi hiểu đặc điểm xã hội Việt Nam trong thời kỳ quá độ lên CNXH.',
    questions: [
      {
        id: 's1q1',
        text: 'Trong thời kỳ quá độ lên CNXH ở Việt Nam, xã hội tồn tại đặc điểm nào?',
        type: 'multiple-choice',
        answers: [
          { id: 'a', text: 'Chỉ còn một giai cấp duy nhất', isCorrect: false },
          { id: 'b', text: 'Nhiều giai cấp và tầng lớp cùng tồn tại', isCorrect: true },
          { id: 'c', text: 'Không còn phân hóa xã hội', isCorrect: false },
          { id: 'd', text: 'Chỉ còn nông dân', isCorrect: false },
        ],
        explanation: 'Trong thời kỳ quá độ, xã hội Việt Nam vẫn tồn tại nhiều giai cấp và tầng lớp như công nhân, nông dân, trí thức, doanh nhân…',
        correctImpact: { nhanThuc: 5, doanKet: 3 },
        wrongImpact: { nhanThuc: -3 },
      },
      {
        id: 's1q2',
        text: 'Thời kỳ quá độ lên CNXH là giai đoạn:',
        type: 'multiple-choice',
        answers: [
          { id: 'a', text: 'Xã hội đã đạt CNXH hoàn chỉnh', isCorrect: false },
          { id: 'b', text: 'Xã hội chuyển từ chế độ cũ sang CNXH', isCorrect: true },
          { id: 'c', text: 'Không còn mâu thuẫn xã hội', isCorrect: false },
          { id: 'd', text: 'Không còn giai cấp', isCorrect: false },
        ],
        explanation: 'Thời kỳ quá độ là giai đoạn chuyển tiếp từ xã hội cũ sang xã hội mới, là quá trình xây dựng những tiền đề cần thiết cho CNXH.',
        correctImpact: { nhanThuc: 5 },
        wrongImpact: { nhanThuc: -3 },
      },
      {
        id: 's1q3',
        text: 'Một đặc điểm của xã hội Việt Nam trong thời kỳ quá độ là:',
        type: 'multiple-choice',
        answers: [
          { id: 'a', text: 'Chỉ có một thành phần kinh tế', isCorrect: false },
          { id: 'b', text: 'Không tồn tại thị trường', isCorrect: false },
          { id: 'c', text: 'Tồn tại nhiều thành phần kinh tế', isCorrect: true },
          { id: 'd', text: 'Không còn doanh nghiệp', isCorrect: false },
        ],
        explanation: 'Trong thời kỳ quá độ, Việt Nam phát triển nền kinh tế thị trường định hướng XHCN với nhiều thành phần kinh tế cùng tồn tại và phát triển.',
        correctImpact: { nhanThuc: 5, onDinh: 3 },
        wrongImpact: { nhanThuc: -3 },
      },
      {
        id: 's1q4',
        text: '"Trong thời kỳ quá độ mọi mâu thuẫn xã hội đều biến mất."',
        type: 'true-false',
        answers: [
          { id: 'true', text: 'Đúng', isCorrect: false },
          { id: 'false', text: 'Sai', isCorrect: true },
        ],
        explanation: 'Các mâu thuẫn xã hội vẫn tồn tại trong thời kỳ quá độ và cần được giải quyết một cách hòa bình, đúng đắn.',
        correctImpact: { nhanThuc: 5, onDinh: 2 },
        wrongImpact: { nhanThuc: -3, onDinh: -2 },
      },
    ],
  },

  // MÀN 2: Xây dựng liên minh giai cấp
  {
    id: 2,
    title: 'Xây dựng liên minh giai cấp',
    description: 'Hiểu vì sao phải thực hiện liên minh giai cấp, tầng lớp',
    objective: 'Giúp người chơi hiểu mục đích và ý nghĩa của việc xây dựng liên minh giai cấp.',
    questions: [
      {
        id: 's2q1',
        text: 'Liên minh giai cấp nhằm mục đích gì?',
        type: 'multiple-choice',
        answers: [
          { id: 'a', text: 'Tập hợp lực lượng phát triển đất nước', isCorrect: true },
          { id: 'b', text: 'Xóa bỏ mọi giai cấp ngay lập tức', isCorrect: false },
          { id: 'c', text: 'Thay thế nhà nước', isCorrect: false },
          { id: 'd', text: 'Phục vụ lợi ích một nhóm', isCorrect: false },
        ],
        explanation: 'Liên minh giai cấp nhằm tập hợp sức mạnh của toàn dân để phát triển đất nước, xây dựng CNXH.',
        correctImpact: { doanKet: 5, onDinh: 3 },
        wrongImpact: { doanKet: -3, onDinh: -2 },
      },
      {
        id: 's2q2',
        text: 'Nền tảng của liên minh giai cấp ở Việt Nam là:',
        type: 'multiple-choice',
        answers: [
          { id: 'a', text: 'Công nhân – nông dân – trí thức', isCorrect: true },
          { id: 'b', text: 'Công nhân – doanh nhân', isCorrect: false },
          { id: 'c', text: 'Nông dân – thương nhân', isCorrect: false },
          { id: 'd', text: 'Trí thức – doanh nhân', isCorrect: false },
        ],
        explanation: 'Liên minh công nhân – nông dân – trí thức là nền tảng của khối đại đoàn kết toàn dân tộc, dưới sự lãnh đạo của Đảng.',
        correctImpact: { doanKet: 5, nhanThuc: 3 },
        wrongImpact: { doanKet: -3 },
      },
      {
        id: 's2q3',
        text: 'Vì sao cần thực hiện liên minh giai cấp?',
        type: 'multiple-choice',
        answers: [
          { id: 'a', text: 'Xã hội có nhiều lực lượng khác nhau', isCorrect: false },
          { id: 'b', text: 'Mỗi giai cấp có vai trò riêng', isCorrect: false },
          { id: 'c', text: 'Cần đoàn kết toàn dân', isCorrect: false },
          { id: 'd', text: 'Tất cả các phương án', isCorrect: true },
        ],
        explanation: 'Tất cả các lý do trên đều đúng. Liên minh giai cấp cần thiết vì xã hội đa dạng, mỗi lực lượng có vai trò riêng và cần đoàn kết để phát triển.',
        correctImpact: { doanKet: 5, nhanThuc: 5, onDinh: 3 },
        wrongImpact: { nhanThuc: -3 },
      },
      {
        id: 's2q4',
        text: 'Liên minh giai cấp giúp:',
        type: 'multiple-choice',
        answers: [
          { id: 'a', text: 'Tăng đoàn kết xã hội', isCorrect: false },
          { id: 'b', text: 'Phát triển kinh tế', isCorrect: false },
          { id: 'c', text: 'Ổn định chính trị', isCorrect: false },
          { id: 'd', text: 'Tất cả các đáp án', isCorrect: true },
        ],
        explanation: 'Liên minh giai cấp đem lại nhiều lợi ích: tăng đoàn kết, phát triển kinh tế và ổn định chính trị - xã hội.',
        correctImpact: { doanKet: 5, onDinh: 5, nhanThuc: 3 },
        wrongImpact: { nhanThuc: -3 },
      },
      {
        id: 's2q5',
        text: 'Những lực lượng nào tham gia khối đại đoàn kết?',
        type: 'multiple-choice',
        answers: [
          { id: 'a', text: 'Công nhân', isCorrect: false },
          { id: 'b', text: 'Nông dân', isCorrect: false },
          { id: 'c', text: 'Trí thức', isCorrect: false },
          { id: 'd', text: 'Tất cả các lực lượng trên', isCorrect: true },
        ],
        explanation: 'Khối đại đoàn kết toàn dân bao gồm tất cả các giai cấp, tầng lớp: công nhân, nông dân, trí thức, doanh nhân và các lực lượng xã hội khác.',
        correctImpact: { doanKet: 5, nhanThuc: 3 },
        wrongImpact: { doanKet: -3 },
      },
    ],
  },

  // MÀN 3: Quan hệ giữa liên minh và đấu tranh giai cấp
  {
    id: 3,
    title: 'Quan hệ giữa liên minh và đấu tranh giai cấp',
    description: 'Hiểu hai khái niệm này không mâu thuẫn nhau',
    objective: 'Giúp người chơi hiểu mối quan hệ biện chứng giữa liên minh giai cấp và đấu tranh giai cấp.',
    questions: [
      {
        id: 's3q1',
        text: 'Liên minh giai cấp có mâu thuẫn với đấu tranh giai cấp không?',
        type: 'multiple-choice',
        answers: [
          { id: 'a', text: 'Có', isCorrect: false },
          { id: 'b', text: 'Không', isCorrect: true },
          { id: 'c', text: 'Không liên quan', isCorrect: false },
          { id: 'd', text: 'Phủ nhận học thuyết Mác', isCorrect: false },
        ],
        explanation: 'Liên minh giai cấp và đấu tranh giai cấp không mâu thuẫn mà thống nhất biện chứng với nhau trong TKQĐ.',
        correctImpact: { nhanThuc: 5, doanKet: 3 },
        wrongImpact: { nhanThuc: -5, onDinh: -2 },
      },
      {
        id: 's3q2',
        text: 'Đấu tranh giai cấp trong thời kỳ quá độ:',
        type: 'multiple-choice',
        answers: [
          { id: 'a', text: 'Chấm dứt hoàn toàn', isCorrect: false },
          { id: 'b', text: 'Chỉ là bạo lực', isCorrect: false },
          { id: 'c', text: 'Có hình thức mới', isCorrect: true },
          { id: 'd', text: 'Không tồn tại', isCorrect: false },
        ],
        explanation: 'Đấu tranh giai cấp trong TKQĐ có nội dung và hình thức mới, không còn chủ yếu là bạo lực mà tập trung vào đấu tranh kinh tế, tư tưởng.',
        correctImpact: { nhanThuc: 5, onDinh: 3 },
        wrongImpact: { nhanThuc: -3, onDinh: -2 },
      },
      {
        id: 's3q3',
        text: 'Liên minh giai cấp giúp:',
        type: 'multiple-choice',
        answers: [
          { id: 'a', text: 'Giảm xung đột xã hội', isCorrect: false },
          { id: 'b', text: 'Tăng đoàn kết', isCorrect: false },
          { id: 'c', text: 'Phát triển xã hội', isCorrect: false },
          { id: 'd', text: 'Tất cả các đáp án', isCorrect: true },
        ],
        explanation: 'Liên minh giai cấp có vai trò toàn diện: giảm xung đột, tăng đoàn kết và thúc đẩy phát triển xã hội.',
        correctImpact: { doanKet: 5, onDinh: 3, nhanThuc: 3 },
        wrongImpact: { nhanThuc: -3 },
      },
      {
        id: 's3q4',
        text: '"Liên minh giai cấp và đấu tranh giai cấp có thể tồn tại song song."',
        type: 'true-false',
        answers: [
          { id: 'true', text: 'Đúng', isCorrect: true },
          { id: 'false', text: 'Sai', isCorrect: false },
        ],
        explanation: 'Đúng. Trong TKQĐ, liên minh giai cấp và đấu tranh giai cấp tồn tại song song, hỗ trợ lẫn nhau để xây dựng CNXH.',
        correctImpact: { nhanThuc: 5, doanKet: 3, onDinh: 3 },
        wrongImpact: { nhanThuc: -5 },
      },
      {
        id: 's3q5',
        text: 'Đấu tranh giai cấp nhằm mục đích:',
        type: 'multiple-choice',
        answers: [
          { id: 'a', text: 'Bảo vệ quyền lợi nhân dân', isCorrect: false },
          { id: 'b', text: 'Chống bất công', isCorrect: false },
          { id: 'c', text: 'Bảo vệ định hướng XHCN', isCorrect: false },
          { id: 'd', text: 'Tất cả các đáp án', isCorrect: true },
        ],
        explanation: 'Đấu tranh giai cấp trong TKQĐ nhằm bảo vệ quyền lợi nhân dân, chống bất công và bảo vệ định hướng XHCN.',
        correctImpact: { congBang: 5, nhanThuc: 5, onDinh: 3 },
        wrongImpact: { nhanThuc: -3 },
      },
    ],
  },

  // MÀN 4: Nội dung đấu tranh giai cấp hiện nay
  {
    id: 4,
    title: 'Nội dung đấu tranh giai cấp hiện nay',
    description: 'Hiểu các biểu hiện hiện đại của đấu tranh giai cấp',
    objective: 'Giúp người chơi nhận diện nội dung đấu tranh giai cấp trong bối cảnh hiện nay.',
    questions: [
      {
        id: 's4q1',
        text: 'Một nội dung của đấu tranh giai cấp hiện nay là:',
        type: 'multiple-choice',
        answers: [
          { id: 'a', text: 'Chống tham nhũng', isCorrect: false },
          { id: 'b', text: 'Chống lợi ích nhóm', isCorrect: false },
          { id: 'c', text: 'Bảo vệ người lao động', isCorrect: false },
          { id: 'd', text: 'Tất cả các đáp án', isCorrect: true },
        ],
        explanation: 'Đấu tranh giai cấp hiện nay bao gồm nhiều nội dung: chống tham nhũng, chống lợi ích nhóm, bảo vệ quyền lợi người lao động.',
        correctImpact: { congBang: 5, nhanThuc: 5 },
        wrongImpact: { nhanThuc: -3 },
      },
      {
        id: 's4q2',
        text: 'Đấu tranh giai cấp hiện nay còn gắn với:',
        type: 'multiple-choice',
        answers: [
          { id: 'a', text: 'Bảo vệ chế độ', isCorrect: false },
          { id: 'b', text: 'Bảo vệ lợi ích nhân dân', isCorrect: false },
          { id: 'c', text: 'Bảo vệ đoàn kết dân tộc', isCorrect: false },
          { id: 'd', text: 'Tất cả các đáp án', isCorrect: true },
        ],
        explanation: 'Đấu tranh giai cấp ngày nay gắn liền với bảo vệ chế độ XHCN, bảo vệ lợi ích nhân dân và đoàn kết dân tộc.',
        correctImpact: { doanKet: 5, onDinh: 5, nhanThuc: 3 },
        wrongImpact: { nhanThuc: -3 },
      },
      {
        id: 's4q3',
        text: 'Một địa phương phát triển kinh tế nhưng xuất hiện: tham nhũng, bất công xã hội, chênh lệch giàu nghèo. Bạn sẽ chọn giải pháp nào?',
        type: 'multiple-choice',
        answers: [
          { id: 'a', text: 'Bỏ qua vì kinh tế tăng trưởng', isCorrect: false },
          { id: 'b', text: 'Chỉ nói về đoàn kết', isCorrect: false },
          { id: 'c', text: 'Vừa đoàn kết vừa đấu tranh chống tiêu cực', isCorrect: true },
          { id: 'd', text: 'Xem mọi mâu thuẫn là đối kháng', isCorrect: false },
        ],
        explanation: 'Giải pháp đúng đắn là kết hợp đoàn kết với đấu tranh chống tiêu cực, không thể bỏ qua các vấn đề xã hội hay cực đoan hóa mâu thuẫn.',
        correctImpact: { congBang: 5, doanKet: 5, onDinh: 5, nhanThuc: 5 },
        wrongImpact: { onDinh: -5, congBang: -3 },
      },
      {
        id: 's4q4',
        text: 'Đấu tranh giai cấp hiện nay còn thể hiện qua:',
        type: 'multiple-choice',
        answers: [
          { id: 'a', text: 'Đấu tranh với quan điểm sai trái', isCorrect: false },
          { id: 'b', text: 'Bảo vệ lợi ích nhân dân', isCorrect: false },
          { id: 'c', text: 'Bảo vệ chế độ', isCorrect: false },
          { id: 'd', text: 'Tất cả các đáp án', isCorrect: true },
        ],
        explanation: 'Đấu tranh giai cấp hiện đại thể hiện qua nhiều hình thức: đấu tranh tư tưởng, bảo vệ quyền lợi nhân dân và bảo vệ chế độ.',
        correctImpact: { nhanThuc: 5, congBang: 3, onDinh: 3 },
        wrongImpact: { nhanThuc: -3 },
      },
    ],
  },

  // MÀN 5: So sánh trước 1980 và hiện nay
  {
    id: 5,
    title: 'So sánh trước 1980 và hiện nay',
    description: 'Hiểu sự thay đổi nhận thức về đấu tranh giai cấp',
    objective: 'Giúp người chơi so sánh và hiểu sự phát triển trong nhận thức về đấu tranh giai cấp.',
    questions: [
      {
        id: 's5q1',
        text: 'Trước năm 1980, đấu tranh giai cấp thường được hiểu là:',
        type: 'multiple-choice',
        answers: [
          { id: 'a', text: 'Đối kháng trực diện', isCorrect: true },
          { id: 'b', text: 'Không tồn tại', isCorrect: false },
          { id: 'c', text: 'Chỉ là lý thuyết', isCorrect: false },
          { id: 'd', text: 'Không quan trọng', isCorrect: false },
        ],
        explanation: 'Trước năm 1980, đấu tranh giai cấp thường được hiểu theo nghĩa đối kháng trực diện, gay gắt giữa các giai cấp.',
        correctImpact: { nhanThuc: 5 },
        wrongImpact: { nhanThuc: -3 },
      },
      {
        id: 's5q2',
        text: 'Đấu tranh giai cấp hiện nay:',
        type: 'multiple-choice',
        answers: [
          { id: 'a', text: 'Giống hoàn toàn trước 1980', isCorrect: false },
          { id: 'b', text: 'Không còn tồn tại', isCorrect: false },
          { id: 'c', text: 'Có nội dung và hình thức mới', isCorrect: true },
          { id: 'd', text: 'Chỉ tồn tại trong sách', isCorrect: false },
        ],
        explanation: 'Đấu tranh giai cấp hiện nay có nội dung và hình thức mới, phù hợp với điều kiện hòa bình xây dựng đất nước.',
        correctImpact: { nhanThuc: 5, onDinh: 3 },
        wrongImpact: { nhanThuc: -3 },
      },
      {
        id: 's5q3',
        text: 'Nguyên nhân của sự thay đổi nhận thức này là:',
        type: 'multiple-choice',
        answers: [
          { id: 'a', text: 'Xã hội phát triển', isCorrect: false },
          { id: 'b', text: 'Cơ cấu giai cấp thay đổi', isCorrect: false },
          { id: 'c', text: 'Hội nhập kinh tế', isCorrect: false },
          { id: 'd', text: 'Tất cả các đáp án', isCorrect: true },
        ],
        explanation: 'Sự thay đổi nhận thức là do nhiều nguyên nhân: xã hội phát triển, cơ cấu giai cấp thay đổi và quá trình hội nhập kinh tế quốc tế.',
        correctImpact: { nhanThuc: 5, onDinh: 3 },
        wrongImpact: { nhanThuc: -3 },
      },
      {
        id: 's5q4',
        text: 'Hiện nay đấu tranh giai cấp gắn với:',
        type: 'multiple-choice',
        answers: [
          { id: 'a', text: 'Phát triển xã hội', isCorrect: false },
          { id: 'b', text: 'Bảo vệ lợi ích nhân dân', isCorrect: false },
          { id: 'c', text: 'Chống tiêu cực', isCorrect: false },
          { id: 'd', text: 'Tất cả các đáp án', isCorrect: true },
        ],
        explanation: 'Đấu tranh giai cấp hiện nay gắn liền với phát triển xã hội, bảo vệ lợi ích nhân dân và đấu tranh chống tiêu cực.',
        correctImpact: { nhanThuc: 5, congBang: 5, doanKet: 3, onDinh: 3 },
        wrongImpact: { nhanThuc: -3 },
      },
    ],
  },
];

// Tính tổng số câu hỏi
export const getTotalQuestions = (): number => {
  return gameStages.reduce((total, stage) => total + stage.questions.length, 0);
};

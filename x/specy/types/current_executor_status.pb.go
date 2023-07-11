// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: specy/specy/current_executor_status.proto

package types

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type CurrentExecutorStatus struct {
	CurrentExecutor string `protobuf:"bytes,1,opt,name=currentExecutor,proto3" json:"currentExecutor,omitempty"`
	ChangeHeight    string `protobuf:"bytes,2,opt,name=changeHeight,proto3" json:"changeHeight,omitempty"`
}

func (m *CurrentExecutorStatus) Reset()         { *m = CurrentExecutorStatus{} }
func (m *CurrentExecutorStatus) String() string { return proto.CompactTextString(m) }
func (*CurrentExecutorStatus) ProtoMessage()    {}
func (*CurrentExecutorStatus) Descriptor() ([]byte, []int) {
	return fileDescriptor_94632336ac053afb, []int{0}
}
func (m *CurrentExecutorStatus) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *CurrentExecutorStatus) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_CurrentExecutorStatus.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *CurrentExecutorStatus) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CurrentExecutorStatus.Merge(m, src)
}
func (m *CurrentExecutorStatus) XXX_Size() int {
	return m.Size()
}
func (m *CurrentExecutorStatus) XXX_DiscardUnknown() {
	xxx_messageInfo_CurrentExecutorStatus.DiscardUnknown(m)
}

var xxx_messageInfo_CurrentExecutorStatus proto.InternalMessageInfo

func (m *CurrentExecutorStatus) GetCurrentExecutor() string {
	if m != nil {
		return m.CurrentExecutor
	}
	return ""
}

func (m *CurrentExecutorStatus) GetChangeHeight() string {
	if m != nil {
		return m.ChangeHeight
	}
	return ""
}

func init() {
	proto.RegisterType((*CurrentExecutorStatus)(nil), "specynetwork.specy.specy.CurrentExecutorStatus")
}

func init() {
	proto.RegisterFile("specy/specy/current_executor_status.proto", fileDescriptor_94632336ac053afb)
}

var fileDescriptor_94632336ac053afb = []byte{
	// 189 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0xd2, 0x2c, 0x2e, 0x48, 0x4d,
	0xae, 0xd4, 0x87, 0x90, 0xc9, 0xa5, 0x45, 0x45, 0xa9, 0x79, 0x25, 0xf1, 0xa9, 0x15, 0xa9, 0xc9,
	0xa5, 0x25, 0xf9, 0x45, 0xf1, 0xc5, 0x25, 0x89, 0x25, 0xa5, 0xc5, 0x7a, 0x05, 0x45, 0xf9, 0x25,
	0xf9, 0x42, 0x12, 0x60, 0x45, 0x79, 0xa9, 0x25, 0xe5, 0xf9, 0x45, 0xd9, 0x7a, 0x60, 0x0e, 0x84,
	0x54, 0x4a, 0xe5, 0x12, 0x75, 0x86, 0x68, 0x75, 0x85, 0xea, 0x0c, 0x06, 0x6b, 0x14, 0xd2, 0xe0,
	0xe2, 0x4f, 0x46, 0x95, 0x90, 0x60, 0x54, 0x60, 0xd4, 0xe0, 0x0c, 0x42, 0x17, 0x16, 0x52, 0xe2,
	0xe2, 0x49, 0xce, 0x48, 0xcc, 0x4b, 0x4f, 0xf5, 0x48, 0xcd, 0x4c, 0xcf, 0x28, 0x91, 0x60, 0x02,
	0x2b, 0x43, 0x11, 0x73, 0x72, 0x3b, 0xf1, 0x48, 0x8e, 0xf1, 0xc2, 0x23, 0x39, 0xc6, 0x07, 0x8f,
	0xe4, 0x18, 0x27, 0x3c, 0x96, 0x63, 0xb8, 0xf0, 0x58, 0x8e, 0xe1, 0xc6, 0x63, 0x39, 0x86, 0x28,
	0x9d, 0xf4, 0xcc, 0x92, 0x8c, 0xd2, 0x24, 0xbd, 0xe4, 0xfc, 0x5c, 0x88, 0x57, 0x74, 0xa1, 0xce,
	0x84, 0x7a, 0xac, 0x02, 0x4a, 0x97, 0x54, 0x16, 0xa4, 0x16, 0x27, 0xb1, 0x81, 0xfd, 0x63, 0x0c,
	0x08, 0x00, 0x00, 0xff, 0xff, 0x34, 0x69, 0x1b, 0xe5, 0xfc, 0x00, 0x00, 0x00,
}

func (m *CurrentExecutorStatus) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *CurrentExecutorStatus) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *CurrentExecutorStatus) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.ChangeHeight) > 0 {
		i -= len(m.ChangeHeight)
		copy(dAtA[i:], m.ChangeHeight)
		i = encodeVarintCurrentExecutorStatus(dAtA, i, uint64(len(m.ChangeHeight)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.CurrentExecutor) > 0 {
		i -= len(m.CurrentExecutor)
		copy(dAtA[i:], m.CurrentExecutor)
		i = encodeVarintCurrentExecutorStatus(dAtA, i, uint64(len(m.CurrentExecutor)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintCurrentExecutorStatus(dAtA []byte, offset int, v uint64) int {
	offset -= sovCurrentExecutorStatus(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *CurrentExecutorStatus) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.CurrentExecutor)
	if l > 0 {
		n += 1 + l + sovCurrentExecutorStatus(uint64(l))
	}
	l = len(m.ChangeHeight)
	if l > 0 {
		n += 1 + l + sovCurrentExecutorStatus(uint64(l))
	}
	return n
}

func sovCurrentExecutorStatus(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozCurrentExecutorStatus(x uint64) (n int) {
	return sovCurrentExecutorStatus(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *CurrentExecutorStatus) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowCurrentExecutorStatus
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: CurrentExecutorStatus: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: CurrentExecutorStatus: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field CurrentExecutor", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCurrentExecutorStatus
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthCurrentExecutorStatus
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCurrentExecutorStatus
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.CurrentExecutor = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ChangeHeight", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCurrentExecutorStatus
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthCurrentExecutorStatus
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCurrentExecutorStatus
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ChangeHeight = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipCurrentExecutorStatus(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthCurrentExecutorStatus
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipCurrentExecutorStatus(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowCurrentExecutorStatus
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowCurrentExecutorStatus
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowCurrentExecutorStatus
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthCurrentExecutorStatus
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupCurrentExecutorStatus
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthCurrentExecutorStatus
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthCurrentExecutorStatus        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowCurrentExecutorStatus          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupCurrentExecutorStatus = fmt.Errorf("proto: unexpected end of group")
)
